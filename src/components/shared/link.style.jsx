import styled from "styled-components";

export const CustomLink = styled.a`
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    border-radius: 100px;
    transition: all 0.2s;
    width: 50%;
    height: 3.5rem;
    @media screen and (max-width: 800px) {
      width: 50%;
      height: 2rem;
    }
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 2);
    background-color: white;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 2);
  }

  box-shadow: 0 0.6px 0.6px rgba(0, 0, 0, 2);
  border: 1px solid #aaa;
  cursor: pointer;
  background-color: white;
  color: black;
`;
