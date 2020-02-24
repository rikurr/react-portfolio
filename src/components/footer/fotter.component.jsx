import React from "react";

import {
  FooterContainer,
  FooterNavigation,
  Lists,
  ListItem,
  Link,
  CopyRightContainer,
  CopyRight
} from "./fotter.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNavigation>
        <Lists>
          <ListItem>
            <Link
              href="https://github.com/riku0329/"
              target="_blank"
              rel="noreferrer noopener"
            >GitHub</Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://react-crwn.herokuapp.com/"
              target="_blank"
              rel="noreferrer noopener"
            >Twitter</Link>
          </ListItem>
        </Lists>
      </FooterNavigation>
      <CopyRightContainer>
        <CopyRight>Copyright&copy; 2020 Riku Ooya. All Rights Reserved.</CopyRight>
      </CopyRightContainer>
    </FooterContainer>
  );
};

export default Footer;
