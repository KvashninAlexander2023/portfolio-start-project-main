import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <SocialIcons>
          <a href="#">
            <Icon iconId={"github"} />
          </a>
          <a href="#">
            <Icon iconId={"telegram"} />
          </a>
          <a href="#">
            <Icon iconId={"discord"} />
          </a>
        </SocialIcons>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Menu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${(props) => `${props.theme.colors.colorBG}99`};
  padding: 32px 0 8px 0;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const SocialIcons = styled.div`
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


  a{
    color: ${(props) => props.theme.colors.colorText};
  }
  a:hover{
    color: ${(props) => props.theme.colors.colorHover};
  }
  `;

/* position: absolute;
    top: calc(0%-205px);
    left: 50%;
    transform: translateX(-50%); */
