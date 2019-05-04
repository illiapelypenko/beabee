import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  /* color: #f3c622; */
  color: #f3f3f3;
  background-color: #23212c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const LogoWrapper = styled.div`
  font-weight: bolder;
  font-size: 40px;
  cursor: pointer;

  :hover {
    color: #f3c622;
  }
`;

const CurrentDateWrapper = styled.div`
  font-size: 20px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <LogoWrapper>BEaBEE</LogoWrapper>
        <CurrentDateWrapper>
          {new Date().getDate()}.{new Date().getMonth()}.
          {new Date().getFullYear()}
        </CurrentDateWrapper>
      </HeaderWrapper>
    );
  }
}

export default Header;
