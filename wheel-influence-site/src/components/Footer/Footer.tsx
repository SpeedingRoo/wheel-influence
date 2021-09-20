import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: white;
  background-color: #303030;
  width: auto;
`;

const Footer = ()=>{
    return (
      <>
        <StyledFooter>Wheel Influence - Copyright {new Date().getFullYear()} </StyledFooter>
      </>
    );
}

export default Footer;