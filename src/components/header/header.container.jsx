import styled from "styled-components";

import { CustomLink } from "../shared/link.style";
import Colors from '../shared/color'

export const HeaderContainer = styled.div`
  height: 95vh;
  -weblit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  background-image: ${Colors.BLUE_LINE};
  background-size: cover;
  background-position: top;
`;
