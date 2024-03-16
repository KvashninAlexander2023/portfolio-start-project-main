import React from "react";
import styled, { css } from "styled-components";
import { myTheme } from "../../styles/Theme.styled";
import { Logo } from "../logo/Logo";
import { SocialIcons } from "../socialIcons/SocialIcons";

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
        <SocialIconsStyled>
          <SocialIcons/>
        </SocialIconsStyled>
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

  /* @media ${myTheme.media.mobile} {
    height: 100%;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
  } */

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
    font-size: 32px;
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
  font-size: 32px;
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


const SocialIconsStyled = styled.div`
  position: absolute;
  bottom: 32px;
  /* top: 100px; */
  /* left: 50%; */
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

    //z-index: 99999;
    //flex-direction: row;
    //align-items: flex-start;
    /* justify-content: fit-content; */
    //position: absolute;
    //left: 50%;
    //bottom: 16px;
    /* top: 90vh; */
    /* top: 90%; */
    /* top: calc(100vh - 64px); */
    //transform: scale(2) ;//translateX(-25%);
    //eight: 0%; 
 
`;