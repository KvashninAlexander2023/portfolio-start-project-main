import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

const StyledHeader = styled.header`
  background-color: ${(props) => `${props.theme.colors.colorBG}`};
  padding: 32px 0 8px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 888;
`;

const SocialIconsStyled = styled.div`
  position: fixed;
  top: 0px;
  left: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  &::before {
    content: "";
    width: 1px;
    height: 190px;
    background-color: ${(props) => props.theme.colors.colorText};
  }

  a {
    color: ${(props) => props.theme.colors.colorText};
  }
  a:hover {
    color: ${(props) => props.theme.colors.colorHover};
  }

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  @media ${myTheme.media.tablet} {
    z-index: 9999999;
    position: relative;
    top: -12px;
  }
`;

export const S = {
  StyledHeader,
  SocialIconsStyled,
  LogoWrapper,
};
