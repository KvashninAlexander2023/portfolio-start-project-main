import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

export const Menu = () => {
  return (
    <StyledMenu>
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
          <select >
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
        </ListItem>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;

const ListItem = styled.li`
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
  &::before{
    content: "#";
    display: inline-block;
    color:  ${myTheme.colors.colorAccent};
    /* position: absolute;
    left: -10px; */


  }

  /* text-align: center; */
`;
