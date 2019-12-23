import React from 'react';
import styled from 'styled-components';
const FooterSection = styled.div`
  text-align: center;
  padding: 10px 0;
  p {
    color: #888;
  }
`;
const Footer = () => {
  return (
    <FooterSection>
      <p> copyright &copy; 2018 by ultra profile </p>
    </FooterSection>
  );
};

export default Footer;
