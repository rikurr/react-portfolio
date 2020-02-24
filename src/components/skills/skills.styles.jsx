import styled from "styled-components";

import Colors from "../shared/color";

export const SkillsContainer = styled.div`
  padding: 7rem 0 20rem 0;
  background-color: ${Colors.GREY_LIGHT};
`;

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  height: 10rem;
  width: 50%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  position: relative;
`;

export const ListsContainer = styled.ul`
  top: 50%;
  padding: 1.5rem;
`;

export const Lists = styled.li`
  font-size: 1.2rem;
  margin-right: 2rem;
  margin-left: 2rem;

  color: ${Colors.BLACK};
`;
