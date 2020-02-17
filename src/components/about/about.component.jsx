import React from "react";

import { AboutContainer, AboutTextStyle } from "./about.styles";
import {
  TextContainer,
  TextBox,
  AboutShape,
  TextStyles,
  HeddingTitle,
  HeddingSub,
  AboutImg
} from "./text.styles";

import { CutomTitle } from "../custom/custom-title";

const About = () => {
  return (
    <AboutContainer>
      <AboutTextStyle>
        <CutomTitle>About me</CutomTitle>
      </AboutTextStyle>

      <TextContainer>
        <TextBox>
          <AboutShape>
            <AboutImg alt="about me" />
          </AboutShape>
          <TextStyles>
            <HeddingTitle>riku ooya</HeddingTitle>
            <HeddingSub>
              初めまして。YouTubeでブロックチェーン作成動画を見てプログラミングに興味を持ち現在フロントエンジニアへの転職を目指して独学で勉強しています。前職では新規獲得の営業をしていました。
            </HeddingSub>
          </TextStyles>
        </TextBox>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
