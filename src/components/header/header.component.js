import React from "react";

import { HeaderContainer } from "./header.container";
import {
  HeaderPrimary,
  HeaderTitle,
  HeaderSub,
  TextContainer
} from "./header-text.container";
import { MainLink } from "../custom/cutom-link.style";

const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <HeaderPrimary>
          <HeaderTitle>WELCOME TO</HeaderTitle>
          <HeaderSub> RIKU OOYA'S PORTFOLIO</HeaderSub>
        </HeaderPrimary>
        <MainLink href="#">Get in github</MainLink>
      </TextContainer>
    </HeaderContainer>
  );
};

export default Header;
