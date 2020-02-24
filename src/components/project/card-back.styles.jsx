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
`;

export const Lists = styled.ul`
  display: inline-block;
  list-style: none;
`;

export const ListsItems = styled.li`
  color: ${Colors.WHITE};
  font-size: 1.4rem;
  border-bottom: 1px solid ${Colors.WHITE};
  margin-right: 2rem;
  margin-left: 2rem;
`;

export const ProjectLink = styled(CustomLink)`
  padding-top: 0.7rem;
  justify-items: center;
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
