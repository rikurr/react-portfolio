import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainLink = styled(Link)`
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    border-radius: 100px;
    transition: all 0.2s;
    width: 30%;
    height: 60px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 2);
    background-image: linear-gradient(45deg, #ffc107 0%, #f76a35 100%);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 2);
  }

  line-height: 56px;
  right: 41%;
  position: absolute;
  box-shadow: 0 0.6px 0.6px rgba(0, 0, 0, 2);
  border: 1px solid #aaa;
  cursor: pointer;
  margin: 40px;
  text-align: center;
  background-image: linear-gradient(45deg, #ffc107 0%, #ff8b5f 100%);
  color: black;
`;
