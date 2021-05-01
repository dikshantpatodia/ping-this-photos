import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: var(--navbar-height-m) 15px 0;
  
  @media screen and (min-width: 769px) {
    padding: var(--navbar-height) 30px 0;
    max-width: var(--main-max-width);
  }
`;

const AppWrapper = ({
  children,
}) => (
  <Fragment>
    <Container>
      {children}
    </Container>
  </Fragment>
);

AppWrapper.propTypes = {
  children: PropTypes.node,
};

export default AppWrapper;
