import styled from "styled-components";

import Colors from "../shared/color";

export const CheckBox = styled.input`
  display: none;
`;

export const Label = styled.label`
  background-color: ${Colors.WHITE};
  height: 4rem;
  width: 4rem;
  position: fixed;
  top: 3rem;
  right: 3rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.5);
  text-align: center;
  @media screen and (max-width: 800px) {
  top: 0.7rem;
  right: 0.7rem;
  }
`;

export const Icon = styled.span`
  position: relative;
  margin-top: 1.9rem;
  &,
  &::before,
  &::after {
    width: 2rem;
    height: 2px;
    background-color: ${Colors.GREY_DARK};
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.5rem;
  }
  &::after {
    top: 0.5rem;
  }
`;

export const Background = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  position: fixed;
  top: 3.5rem;
  right: 4rem;
  background-image: radial-gradient(
    ${Colors.TERTIARY_LIGHT},
    ${Colors.TERTIARY_DARK}
  );
  z-index: 1000;
  transition: transform 0.7s cubic-bezier(0.85, 0, 0, 07, 1);
  @media screen and (max-width: 800px) {
  top: 1rem;
  right: 1rem;
  }
`;

export const Nav = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;

  opacity: 0;
  width: 0;
  transition: all 0.8s;
`;

export const List = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
`;

export const ListItems = styled.li``;

export const NavLink = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 2rem;
  font-weight: 300;
  color: ${Colors.WHITE};
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    ${Colors.WHITE} 50%
  );
  background-size: 250%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${Colors.BLACK};
    transform: translateX(1rem);
  }
`;

export const NavigationContainer = styled.div`
  ${CheckBox}:checked ~ ${Background} {
    transform: scale(80);
  }

  ${CheckBox}:checked ~ ${Nav} {
    opacity: 1;
    width: 100%;
  }

  ${Label}:hover ${Icon}::before {
    top: -0.7rem;
  }

  ${Label}:hover ${Icon}::after {
    top: 0.7rem;
  }

  ${CheckBox}:checked + ${Label} ${Icon} {
    background-color: transparent;
  }

  ${CheckBox}:checked + ${Label} ${Icon}::before {
    top: 0;
    transform: rotate(135deg);
  }

  ${CheckBox}:checked + ${Label} ${Icon}::after {
    top: 0;
    transform: rotate(-135deg);
  }

  display: flex;
  flex-direction: column;
  align-items: center;


`;
