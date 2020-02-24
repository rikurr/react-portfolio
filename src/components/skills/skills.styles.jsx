import styled from "styled-components";

import Colors from "../shared/color";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0 20rem 0;
  background-image: ${Colors.BLUE_LINE};
  background-size: cover;
  @media screen and (max-width: 800px) {
    padding: 10rem;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SkillsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.6);
  width: 10rem;
  padding: 2.5rem;
  margin: 2rem;
  border-radius: 3px;
  position: relative;
  font-size: 1.1rem;
  color: ${Colors.BLACK};
  transition: transition .8s;
  @media screen and (max-width: 800px) {
  }

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
`;

export const Icon = styled.img`
  height: 50%;
  width: 50%;
`;

export const ListContainer = styled.ul`
  list-style: none;
`;

export const List = styled.li``;
