import React from "react";
import styled, { css } from "styled-components";
import { myTheme } from "../../../../styles/Theme.styled";


export const Menu: React.FC<{menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return (
          <ListItem>
            <Link href="#">{item}</Link>
          </ListItem>
        );
      })}
      <ListItem>
        <select>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
      </ListItem>
    </ul>
  );
};


const ListItem = styled.li`
  select {
    background-color: ${myTheme.colors.colorBG};
    border: none;
    outline: none;
    color: ${myTheme.colors.colorText};
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
  }
`;