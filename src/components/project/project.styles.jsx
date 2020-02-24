import styled from "styled-components";

import Colors from "../shared/color";

export const ProjectContainer = styled.div`
  background-color: ${Colors.GREY_LIGHT};
  padding: 0 0 10rem 0;
  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const CardItems = styled.div`
  padding: 3rem 4rem 1rem 4rem;
  width: 100%;
  @media screen and (max-width: 800px) {
    padding: 0 0 4rem 0;
    /* margin-bottom: 4rem; */
  }
`;
