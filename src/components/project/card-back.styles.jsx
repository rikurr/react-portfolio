import styled from "styled-components";

import { CustomLink } from "../shared/link.style";

import Colors from "../shared/color";

export const CardCta = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const ListsBox = styled.div`
  margin-bottom: 2rem;
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
    margin-top: 4rem;
  }
`;

export const Lists = styled.ul`
  display: inline-block;
  list-style: none;
  @media screen and (max-width: 800px) {
  }
`;

export const ListsItems = styled.li`
  color: ${Colors.WHITE};
  font-size: 1.4rem;
  border-bottom: 1px solid ${Colors.WHITE};
  margin-right: 2rem;
  margin-left: 2rem;
  @media screen and (max-width: 800px) {
    font-size: 1rem;
    display: inline-block;
    border-bottom: none;
    margin-right: 1rem;
    margin-left: 0;
  }
`;

export const ProjectLink = styled(CustomLink)`
  padding-top: 1.2rem;
  justify-items: center;
  @media screen and (max-width: 800px) {
    padding-top: 0rem;
  }
`;

export const LinkBox = styled.div`
  padding-top: 3rem;
`;

export const Link = styled.a`
  &:hover,
  &:active {
    color: ${Colors.BLACK};
  }
  color: ${Colors.WHITE};
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
`;

export const Span = styled.span`
  font-size: 1.2rem;
`;
