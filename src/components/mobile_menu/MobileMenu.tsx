import React from "react";
import styled, { css } from "styled-components";
import { myTheme } from "../../styles/Theme.styled";
import { Logo } from "../logo/Logo";

export const MobileMenu = () => {
  return (
    <StyledMenu>
      <WrapperLogo>
        <Logo/>
      </WrapperLogo>
      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>
      <MenuPopup isOpen={true}>
        <ul>
          <ListItem>
            <Link href="#">home</Link>
          </ListItem>
          <ListItem>
            <Link href="#">works</Link>
          </ListItem>
          <ListItem>
            <Link href="#">about-me</Link>
          </ListItem>
          <ListItem>
            <Link href="#">contacts</Link>
          </ListItem>
          <ListItem>
            <select>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
          </ListItem>
        </ul>
      </MenuPopup>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: none;


  @media ${myTheme.media.tablet} {
    display: block;
  }
`;

const WrapperLogo = styled.div`
  position: fixed;
  top: 20px;
  left: 15px;
  z-index: 99999;
`


const MenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  z-index: 9999;
  background-color:  ${(props) => props.theme.colors.colorBG};
 
  display: none;


  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    
  `}


  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

`;

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  width: 100px;
  height: 100px;
  top: -55px;
  right: -45px;
  z-index: 89999;
  span {
    display: block;
    width: 24px;
    height: 2px;
    /* color: ${(props) => props.theme.colors.colorText}; */
    background-color: ${(props) => props.theme.colors.colorText};
    position: absolute;
    left: 0;
    bottom: 0;

    ${props => props.isOpen && css<{isOpen: boolean}>`
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

      ${props => props.isOpen && css<{isOpen: boolean}>`

        width: 24px;
        transform: rotate(-90deg);
    
    `}
    }
  }
`;

const ListItem = styled.li<{ props?: "any" }>`
  select {
    background-color: ${(props) => props.theme.colors.colorBG};
    border: none;
    outline: none;
    /* appearance: none; */
    color: ${(props) => props.theme.colors.colorText};
    /* background-color: transparent; */
    /* & option {
      border: none;
      background-color: transparent;

    } */
  }
`;
const Link = styled.a`
  font-family: "Fira Code", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: inherit;
  position: relative;
  &:hover {
    color: ${myTheme.colors.colorHover};
    font-weight: 500;
  }
  &::before {
    content: "#";
    display: inline-block;
    color: ${myTheme.colors.colorAccent};
    /* position: absolute;
    left: -10px; */
  }

  /* text-align: center; */
`;
