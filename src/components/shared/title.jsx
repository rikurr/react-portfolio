import styled from "styled-components";

import Colors from "../shared/color";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomTitle = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: ${Colors.BLUE_LINE};
  display: inline-block;
  -webkit-background-clip: text;
  color: transparent;
  transition: all 0.2s;
  letter-spacing: 0.4rem;
  @media screen and (max-width: 800px) {
  font-size: 1.4rem;
  padding-bottom: 2rem
  }

  &:hover {
    transform: skewY(3deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, .2);
  }

`;
