import React from "react";

import {
  SkillsContainer,
  SkillsBox,
  BoxContainer,
  Icon,
  ListContainer,
  List
} from "./skills.styles";

import { CustomTitle, TitleContainer } from "../shared/title";

import language from "../../assets/Orion_html5.svg"
import heart from "../../assets/Orion_love.svg"
import tools from "../../assets/Orion_luxury.svg"
import library from "../../assets/Orion_chats.svg"

const Skills = () => {
  return (
    <SkillsContainer >
      <TitleContainer>
        <CustomTitle>Skills</CustomTitle>
      </TitleContainer>
      <BoxContainer>
        <SkillsBox>
          <span>言語</span>
          <Icon src={language} alt="Language" />
          <ListContainer>
            <List>Html5</List>
            <List>Css3</List>
            <List>JavaScript</List>
            <List>Ruby</List>
          </ListContainer>
        </SkillsBox>
        <SkillsBox>
          <span>ライブラリ</span>
          <Icon src={library} alt="Library" />
          <ListContainer>
            <List>React</List>
            <List>Redux</List>
            <List>Hooks</List>
          </ListContainer>
        </SkillsBox>
        <SkillsBox>
          <span>ツール</span>
          <Icon src={tools} alt="Tools" />
          <ListContainer>
            <List>Git</List>
            <List>FireBase</List>
            <List>Docker</List>
          </ListContainer>
        </SkillsBox>
        <SkillsBox>
          <span>その他</span>
          <Icon src={heart} alt="Heart" />
          <ListContainer>
            <List>Node.js</List>
            <List>GraphQl</List>
            <List>Rails</List>
          </ListContainer>
        </SkillsBox>
      </BoxContainer>
    </SkillsContainer>
  );
};

export default Skills;
