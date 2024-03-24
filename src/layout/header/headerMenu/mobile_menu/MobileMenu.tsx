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
    <S.MobileMenuStyled>
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
        <S.SocialIconsStyled>
          <SocialIcons />
        </S.SocialIconsStyled>
      </S.MenuPopup>
    </S.MobileMenuStyled>
  );
};
