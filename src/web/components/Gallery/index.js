import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import LazyLoad from 'react-lazyload';
import API_END_POINTS from 'src/config/integrations';
import { getApiResponseObject } from 'src/web/common/restApiFunctions';
import { RESPONSE_CODES } from 'src/config/definitions';
import WaitingIndicator from 'src/web/components/atoms/WaitingIndicator';

import * as S from './styles';
import Avatar from '../atoms/avatar';

const DIFFERENCE_BETWEEN_LOADING_NEW_IMAGES = 10;
const INITIAL_PAGE_NUMBER = 1;
const FETCH_LIMIT = 15; // reduced due to immense load in network, default limit is 30 by picsum API
const IMAGE_BASE_URL = 'https://picsum.photos/id';
const THUMBNAIL_SIZE_RATIO = 10;

const getImage = (imageInfo) => {
  const h = Math.round(imageInfo.height / THUMBNAIL_SIZE_RATIO);
  const w = Math.round(imageInfo.width / THUMBNAIL_SIZE_RATIO);

  return (
    <S.ImageItem
      src={`${IMAGE_BASE_URL}/${imageInfo.id}/${w}/${h}`}
      alt={imageInfo.author}
      width={w}
      height={h}
    />
  );
};

const Gallery = () => {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setIsLoading] = useState(1);

  const pageRef = useRef(INITIAL_PAGE_NUMBER);

  const fetchImagesFromPicsum = useCallback(async (pageNumber) => {
    const url = `${API_END_POINTS.list}/?page=${pageNumber}&limit=${FETCH_LIMIT}`;
    setIsLoading(true);

    try {
      const response = await getApiResponseObject(url);
      const { status, data } = response;

      setIsLoading(false);
      return { status, data };
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  }, []);

  const fetchInitialImages = useCallback(
    async (pageNumber) => {
      const response = await fetchImagesFromPicsum(pageNumber);
      const { status, data: newImages } = response;

      if (status === RESPONSE_CODES.OK) {
        setImagesList((images) => [...images, ...newImages]);
      }
    }, [fetchImagesFromPicsum],
  );

  const loadMoreImages = () => {
    pageRef.current += 1;
    fetchInitialImages(pageRef.current);
  };

  useEffect(() => {
    fetchInitialImages(pageRef.current);
  }, [fetchInitialImages]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const isScroll = clientHeight + scrollTop >= scrollHeight - DIFFERENCE_BETWEEN_LOADING_NEW_IMAGES;

        if (isScroll) loadMoreImages();
      });
    }
  }, []);

  return (
    <S.Container>
      <S.Title>Gallery</S.Title>
      {imagesList && (
        <S.ImagesContainer>
          {imagesList.map((imageItem) => (
            <S.ImageContainer key={imageItem.id}>
              <LazyLoad once>
                {getImage(imageItem)}
              </LazyLoad>
              <S.AuthorDetails>
                <Avatar fullName={imageItem.author} />
                <S.AuthorName>{imageItem.author}</S.AuthorName>
              </S.AuthorDetails>
            </S.ImageContainer>
          ))}
        </S.ImagesContainer>
      )}

      {isLoading && <WaitingIndicator />}
    </S.Container>
  );
};

export default Gallery;
