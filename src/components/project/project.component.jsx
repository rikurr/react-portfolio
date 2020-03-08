import React from "react";

import { CustomTitle, TitleContainer } from "../shared/title";

import { Card, CardSide } from "./card.styles";

import {
  CardHeadding,
  CardDetails,
  CardPicture,
  DetailsText
} from "./card-front.styles";

import {
  CardCta,
  ListsBox,
  Lists,
  ListsItems,
  ProjectLink,
  LinkBox,
  Link,
  Span
} from "./card-back.styles";

import { ProjectContainer, CardContainer, CardItems } from "./project.styles";

const Project = () => {
  return (
    <ProjectContainer>
      <TitleContainer>
        <CustomTitle>Project</CustomTitle>
      </TitleContainer>
      <CardContainer>
        <CardItems>
          <Card>
            <CardSide className="front">
              <CardPicture className="CardPicture__1"></CardPicture>
              <CardHeadding>News API アプリ</CardHeadding>
              <CardDetails>
                <DetailsText>Hacker APIを使用したニュース一覧アプリです</DetailsText>
              </CardDetails>
            </CardSide>
            <CardSide className="back back_1">
              <CardCta>
                <ListsBox>
                  <Lists>
                    <ListsItems>React</ListsItems>
                    <ListsItems>Hooks</ListsItems>
                    <ListsItems>Css3</ListsItems>
                    <ListsItems>Styled-Components</ListsItems>
                  </Lists>
                </ListsBox>
                <LinkBox>
                  <ProjectLink
                    href="https://hn-news-rr.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Span>アプリへ移動</Span>
                  </ProjectLink>
                </LinkBox>
                <LinkBox>
                  <Link
                    href="https://github.com/riku0329/HN-react-app"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </Link>
                </LinkBox>
              </CardCta>
            </CardSide>
          </Card>
        </CardItems>
        <CardItems>
          <Card>
            <CardSide className="front">
              <CardPicture className="CardPicture__2" />
              <CardHeadding>ECアプリ</CardHeadding>
              <CardDetails>
                <DetailsText>
                  ファッション系ECサイトです。<br />
                  FireBaseによるuser登録機能とRedux-Sagaによるショップデータの非同期処理,Supenseによるアプリのパフォーマンス向上を実装しています。
                </DetailsText>
              </CardDetails>
            </CardSide>
            <CardSide className="back back_2">
              <CardCta>
                <ListsBox>
                  <Lists>
                    <ListsItems>React</ListsItems>
                    <ListsItems>Redux-saga</ListsItems>
                    <ListsItems>FireBase</ListsItems>
                    <ListsItems>Hooks</ListsItems>
                  </Lists>
                </ListsBox>
                <LinkBox>
                  <ProjectLink
                    href="https://react-crwn.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Span>アプリへ移動</Span>
                  </ProjectLink>
                </LinkBox>
                <LinkBox>
                  <Link
                    href="https://github.com/riku0329/react_ecshop"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </Link>
                </LinkBox>
              </CardCta>
            </CardSide>
          </Card>
        </CardItems>
        <CardItems>
          <Card>
            <CardSide className="front">
              <CardPicture className="CardPicture__3"></CardPicture>
              <CardHeadding>ポートフォリオサイト</CardHeadding>
              <CardDetails>
                <DetailsText>このポートフォリオサイトです。<br />Reacthooksとstyled-componentsを使用しています。</DetailsText>
              </CardDetails>
            </CardSide>
            <CardSide className="back back_3">
              <CardCta>
                <ListsBox>
                  <Lists>
                    <ListsItems>React</ListsItems>
                    <ListsItems>Styled-Components</ListsItems>
                    <ListsItems>Hooks</ListsItems>
                    <ListsItems>mo-js</ListsItems>
                  </Lists>
                </ListsBox>
                <LinkBox>
                  <ProjectLink
                    href="https://react-crwn.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Span>アプリへ移動</Span>
                  </ProjectLink>
                </LinkBox>
                <LinkBox>
                  <Link
                    href="https://react-crwn.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </Link>
                </LinkBox>
              </CardCta>
            </CardSide>
          </Card>
        </CardItems>
      </CardContainer>
    </ProjectContainer>
  );
};

export default Project;
