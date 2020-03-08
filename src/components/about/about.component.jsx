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
              ブロックチェーンを作る動画を見たのがきっかけでプログラミングでできることは無限にあると感じたのと何かサービスを作ることがとにかく楽しいと思いエンジニアになるべく現在独学でReactを中心に勉強しています。<br />前職では新規獲得の販売営業をしていました。<br />ドライブが好きで和歌山の海沿いを走ったり8時間かけてディズニーランドへ行くこともあります。
            </HeddingSub>
          </TextStyles>
        </TextBox>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
