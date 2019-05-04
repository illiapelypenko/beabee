import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  color: #f3f3f3;
  background-color: #23212c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  margin-top: 20px;
`;

class Footer extends Component {
  render() {
    return <FooterWrapper>Created by Pelypenko Illia</FooterWrapper>;
  }
}

export default Footer;
