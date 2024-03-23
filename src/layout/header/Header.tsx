import React from "react";
import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./mobile_menu/MobileMenu";
import { SocialIcons } from "../../components/socialIcons/SocialIcons";
import { S } from "./Header_Styles";

const menuItems = ["home", "works", "about-me", "contacts"];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  return (
    <S.StyledHeader>
      <Container>
        <S.SocialIconsStyled>
          <SocialIcons />
        </S.SocialIconsStyled>
        <FlexWrapper justify="space-between" align="center">
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
          <DesktopMenu menuItems={menuItems} />
          <MobileMenu menuItems={menuItems} />
        </FlexWrapper>
      </Container>
    </S.StyledHeader>
  );
};
