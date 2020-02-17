import styled from "styled-components";

export const CutomTitle = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: linear-gradient(45deg, #ffc107 0%, #f76a35 100%);
  display: inline-block;
  -webkit-background-clip: text;
  color: transparent;
  transition: all 0.2s;
  letter-spacing: 0.4rem;

  &:hover {
    transform: skewY(3deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, .2);
  }
  
`;
