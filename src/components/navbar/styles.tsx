import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    height: 60px;
  }
`;

export const LeftContainer = styled.div`
  flex: 12%;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0;
`;

export const RightContainer = styled.div`
  flex: 88%;
  display: flex;
  background-color: white;
`;

export const NavBarInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Logo1 = styled.img`
  margin: 5px;
  height: auto;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const Logo2 = styled.img`
  margin: 5px;
  height: auto;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavBarExtendedContainer = styled.div``;
