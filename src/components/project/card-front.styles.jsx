import styled from "styled-components";

import Colors from "../shared/color";

export const CardHeadding = styled.h4`
  font-size: 2rem;
  font-weight: 30;
  text-align: center;
  color: ${Colors.BLACK};
  border-bottom: 1px solid ${Colors.BLACK};
  display: inline;
`;


export const CardPicture = styled.div`
  background-size: cover;
  height: 17rem;
  background-blend-mode: color;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const CardDetails = styled.div`
  text-align: center;
  margin: 1rem;
`;

export const DetailsText = styled.h4`
  font-size: 1rem;
  color: ${Colors.BLACK};
`;
