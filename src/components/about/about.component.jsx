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
              YouTubeでブロックチェーンを作る動画を見てからプログラミングにはまりました。仕事以外の時はずっと勉強していたいと思うぐらいハマってますが仕事しながら独学しているてめ学習効率が低いです。<br />現在はフロントエンジニアへ転職してエンジニアとして新しいものをサービスなどをつくることを目指し日々独学で勉強しています。前職では新規獲得の販売営業をしていました。 <br />趣味はドライブをすることで車で大阪から東京ディズニーランド8時間かけてに行くこともありました。
            </HeddingSub>
          </TextStyles>
        </TextBox>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
