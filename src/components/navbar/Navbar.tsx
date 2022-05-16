import React from "react";

import LogoImg2 from "../../assets/icon.svg";
import LogoImg from "../../assets/logo-home-digesto.svg";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavBarInnerContainer,
  NavBarExtendedContainer,
  Logo1,
  Logo2,
} from "./styles";

function NavBar() {
  return (
    <NavbarContainer>
      <NavBarInnerContainer>
        <LeftContainer>
          <Logo1 src={LogoImg} />
          <Logo2 src={LogoImg2} />
        </LeftContainer>
        <RightContainer />
      </NavBarInnerContainer>
      <NavBarExtendedContainer />
    </NavbarContainer>
  );
}

export default NavBar;
