import React from "react";

import { AboutContainer } from "./about.styles";
import {
  TextContainer,
  TextBox,
  AboutShape,
  TextStyles,
  HeddingTitle,
  HeddingSub,
  AboutImg
} from "./text.styles";

import { CustomTitle, TitleContainer } from "../shared/title";

const About = () => {
  return (
    <AboutContainer>
      <TitleContainer>
        <CustomTitle>About me</CustomTitle>
      </TitleContainer>
      <TextContainer>
        <TextBox>
          <AboutShape>
            <AboutImg alt="about me" />
          </AboutShape>
          <TextStyles>
            <HeddingTitle>riku ooya</HeddingTitle>
            <HeddingSub>
              1997年生まれ。
              YouTubeでブロックチェーンを作る動画をきっかけでプログラミングにはまり日々Reactを中心に独学で勉強をしています。<br />前職では新規獲得の販売営業をしていました。現在は第二新卒でエンジニアへの転職を目指して毎日勉強しています。<br />ドライブが好きででよく和歌山に行ったり8時間かけてディズニーランドに行くこともありました。
            </HeddingSub>
          </TextStyles>
        </TextBox>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
