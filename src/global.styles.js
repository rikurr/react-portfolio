import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
    box-sizing: boder-box;
    font-size: 100%;
    padding: 20px 40px;
    font-size: 16px;
    line-height: 1.7;
    color: #777;
    @media screen and (max-width: 800px) {
      padding: 0;
      font-size: 80%;
      width: 100%;
    }
  }
`;
