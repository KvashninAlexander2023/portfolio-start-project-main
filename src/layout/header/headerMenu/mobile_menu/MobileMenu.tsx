import React, { useState } from "react";
import styled, { css } from "styled-components";
import { myTheme } from "../../../../styles/Theme.styled";
import { SocialIcons } from "../../../../components/socialIcons/SocialIcons";
import { Menu } from "../Menu/Menu";

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };

  return (
    <StyledMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>
      <MenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setmenuIsOpen(false);
        }}
      >
        <Menu menuItems={props.menuItems} />
        <SocialIconsStyled>
          <SocialIcons />
        </SocialIconsStyled>
      </MenuPopup>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: none;
  & a,
  select {
    font-size: 32px;
  }
  @media ${myTheme.media.tablet} {
    display: block;
  }
`;

const WrapperLogo = styled.div`
  position: fixed;
  top: 20px;
  left: 15px;
  z-index: 99999;
`;

const MenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: ${(props) => props.theme.colors.colorBG};
  padding: 1px;

  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 36px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media ${myTheme.media.mobile} {
      align-items: flex-start;
      position: absolute;
      top: 95px;
      left: 16px;
    }
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 60px;
  height: 60px;
  top: 0px;
  right: 0px;
  z-index: 89999;
  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.colorText};
    position: absolute;
    right: 20px;
    top: 36px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        transform: rotate(45deg);
      `}

    &::before {
      content: "";
      display: block;
      width: 15px;
      height: 2px;
      background-color: ${(props) => props.theme.colors.colorText};
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translateY(5px) translateX(9px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          width: 24px;
          transform: rotate(-90deg);
        `}
    }
  }
`;

const SocialIconsStyled = styled.div`
  position: absolute;
  bottom: 32px;
  display: flex;
  transform: scale(2);
  flex-direction: row;
  align-items: center;
  gap: 8px;

  a {
    color: ${(props) => props.theme.colors.colorText};
  }
  a:hover {
    color: ${(props) => props.theme.colors.colorHover};
  }
`;
