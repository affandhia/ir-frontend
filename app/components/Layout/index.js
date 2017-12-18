import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Layout = (props) => {
  const StyledFooter = styled(Footer)`
    position: absolute;
    bottom: 0;
  `;
  return (
    <div>
      <Navbar />
      {props.children}
      <StyledFooter />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
