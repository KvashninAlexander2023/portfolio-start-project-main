import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../../styles/Theme.styled";
import { Menu } from "../Menu/Menu";

export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <StyledMenu>
      <Menu menuItems={props.menuItems} />
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }

  @media ${myTheme.media.tablet} {
    display: none;
  }
`;
