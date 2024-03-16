import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { myTheme } from "../../styles/Theme.styled";





export const SocialIcons = () => {
  return (
        <>
          <a href="#">
            <Icon iconId={"github"} />
          </a>
          <a href="#">
            <Icon iconId={"telegram"} />
          </a>
          <a href="#">
            <Icon iconId={"discord"} />
          </a>
        </>)}


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

  @media ${myTheme.media.tablet} {
    &::before{
      content: none;
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
 }
`;