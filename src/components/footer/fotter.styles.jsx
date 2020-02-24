import styled from "styled-components";

import Colors from "../shared/color";

export const FooterContainer = styled.div`
  background-color: ${Colors.GREY_DARK};
  padding: 5rem 0;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const FooterNavigation = styled.div`
  border-top: 1px solid ${Colors.GREY_LIGHT};
  padding: 1rem;
  display: inline-block;
`;

export const Lists = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: inline-block;
  margin: 0 5rem;
`;

export const Link = styled.a`
  &:hover,
  &:active {
    color: ${Colors.PRIMARY_LIGHT};
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    transform: rotate(5deg) scale(1.3);
  }

  color: ${Colors.WHITE};
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
`;

export const CopyRightContainer = styled.div``;

export const CopyRight = styled.p``;
