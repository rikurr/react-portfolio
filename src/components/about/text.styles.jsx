import styled, { css } from "styled-components";

import Colors from "../shared/color";

import img from "../../img/riku.jpg";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 4rem;
  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export const TextBox = styled.p`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  padding: 5rem;
  padding-left: 9rem;
  font-size: 1.2rem;
  transform: skewX(-12deg);
  @media screen and (max-width: 800px) {
    margin: 1.7rem;
    padding: 1rem;
    padding-left: 4rem;
    width: 100%;
    transform: skewX(0);
  }
`;

export const AboutShape = styled.figure`
  width: 10rem;
  height: 10rem;
  float: left;
  -webkit-shape-outside: circle(50% at 50% 50%);
  shape-outside: circle(50% at 50% 50%);
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-3rem) skewX(12deg);
  @media screen and (max-width: 800px) {
    width: 8rem;
    height: 8rem;
    transform: translateX(-3rem) skewX(0);
  }
`;

export const AboutImg = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const TextStyles = styled.div`
  transform: skewX(12deg);
  @media screen and (max-width: 800px) {
    transform: skewX(0);
  }
`;

const Hedding = css`
  margin-bottom: 1rem;
`;

export const HeddingTitle = styled.h4`
  color: ${Colors.BLACK};
  ${Hedding}
`;

export const HeddingSub = styled.p`
  color: ${Colors.BLACK};
  ${Hedding}
  font-size: 1rem;
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
