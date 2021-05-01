import { load as webFontLoader } from 'webfontloader';

const configureWebFontService = () => {
  if (typeof webFontLoader !== 'undefined') {
    webFontLoader({
      google: {
        families: ['Rubik:300,500,700&display=swap'],
      },
    });
  } else {
    // eslint-disable-next-line no-console
    console.log('WebFont not defined!');
  }
};

export default configureWebFontService;
