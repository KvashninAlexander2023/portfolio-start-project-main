import React from "react";
import {S} from "../HeaderMenu_Styles"


export const Menu: React.FC<{menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return (
          <S.ListItem>
            <S.Link href="#">{item}</S.Link>
          </S.ListItem>
        );
      })}
      <S.ListItem>
        <select>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
      </S.ListItem>
    </ul>
  );
};


