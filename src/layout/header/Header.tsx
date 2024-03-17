import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { myTheme } from "../../styles/Theme.styled";
import { MobileMenu } from "../../components/mobile_menu/MobileMenu";
import { SocialIcons } from "../../components/socialIcons/SocialIcons";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <SocialIconsStyled>
          <SocialIcons />
        </SocialIconsStyled>
        <FlexWrapper justify="space-between" align="center">
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Menu />
          <MobileMenu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${(props) => `${props.theme.colors.colorBG}`};
  /* height: 35px; */
  padding: 32px 0 8px 0;
  /* backdrop-filter: blur(5px); //задает размытие background */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 888;

  /* @media ${myTheme.media.tablet} {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
  z-index: 999999999999; }*/
`;

const SocialIconsStyled = styled.div`
  position: fixed;
  top: 0px;
  left: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  &::before {
    content: "";
    width: 1px;
    height: 190px;
    background-color: ${(props) => props.theme.colors.colorText};
  }

  a {
    color: ${(props) => props.theme.colors.colorText};
  }
  a:hover {
    color: ${(props) => props.theme.colors.colorHover};
  }

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  @media ${myTheme.media.tablet} {
    z-index: 9999999;
    position: relative;
    top: -12px;
    /* display: none; */
  }
`;

/* position: absolute;
    top: calc(0%-205px);
    left: 50%;
    transform: translateX(-50%); */
