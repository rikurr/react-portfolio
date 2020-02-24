import styled from "styled-components";

import Colors from "../shared/color";

export const AboutContainer = styled.div`
  background-color: ${Colors.GREY_LIGHT};
  padding: 25rem 0 10rem 0;
  margin-top: -20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 800px) {
  padding: 15rem 0;
  }
`;
