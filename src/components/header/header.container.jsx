import styled from "styled-components";

import Colors from "../shared/color";

export const HeaderContainer = styled.div`
  height: 95vh;
  -weblit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  background-image: ${Colors.BLUE_LINE};
  background-size: cover;
  background-position: top;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    -weblit-clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
  }
`;
