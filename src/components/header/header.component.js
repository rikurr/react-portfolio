import React from "react";

import { HeaderContainer } from "./header.container";
import {
  HeaderPrimary,
  HeaderTitle,
  HeaderSub,
  TextContainer
} from "./header-text.container";

import Usage from '../animation-button/animation-button.component'


const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <HeaderPrimary>
          <HeaderTitle>WELCOME TO</HeaderTitle>
          <HeaderSub> RIKU OOYA'S PORTFOLIO</HeaderSub>
          <Usage />
        </HeaderPrimary>
      </TextContainer>
    </HeaderContainer>
  );
};

export default Header;
