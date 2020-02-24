import React from "react";

import {
  SkillsContainer,
  SkillsBox,
  ListsContainer,
  Lists
} from "./skills.styles";

import { CustomTitle, TitleContainer } from "../shared/title";

const Skills = () => {
  return (
    <SkillsContainer>
      <TitleContainer>
        <CustomTitle>Skills</CustomTitle>
      </TitleContainer>
      <SkillsBox>
        <ListsContainer>
          <Lists>Ruby</Lists>
          <Lists>JavaScript</Lists>
          <Lists>Css</Lists>
        </ListsContainer>
        <ListsContainer>
          <Lists>React</Lists>
          <Lists>Rails</Lists>
          <Lists>Redux</Lists>
        </ListsContainer>
        <ListsContainer>
          <Lists>Docker</Lists>
          <Lists>GitHub</Lists>
          <Lists>FireBase</Lists>
        </ListsContainer>
      </SkillsBox>
    </SkillsContainer>
  );
};

export default Skills;
