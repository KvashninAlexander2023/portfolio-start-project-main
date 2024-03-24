import React, { useState } from "react";
import { SocialIcons } from "../../../../components/socialIcons/SocialIcons";
import { Menu } from "../Menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setmenuIsOpen(false);
        }}
      >
        <Menu menuItems={props.menuItems} />
        <S.SocialIcons>
          <SocialIcons />
        </S.SocialIcons>
      </S.MenuPopup>
    </S.MobileMenu>
  );
};
