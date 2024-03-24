import React from "react";
import { Menu } from "../Menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.DesktopMenuStyled>
      <Menu menuItems={props.menuItems} />
    </S.DesktopMenuStyled>
  );
};


