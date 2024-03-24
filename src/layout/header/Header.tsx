import React from "react";
import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "./headerMenu/DesktopMenu/DesktopMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./headerMenu/mobile_menu/MobileMenu";
import { SocialIcons } from "../../components/socialIcons/SocialIcons";
import { S } from "./Header_Styles";

const menuItems = ["home", "works", "about-me", "contacts"];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

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
          {width < breakpoint ? (
            <MobileMenu menuItems={menuItems} />
          ) : (
            <DesktopMenu menuItems={menuItems} />
          )}
        </FlexWrapper>
      </Container>
    </S.StyledHeader>
  );
};
