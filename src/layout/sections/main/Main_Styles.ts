import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import dots from "../../../assets/images/DotsFoto.svg";
import photologo from "../../../assets/images/LogoFoto.svg";

const Main = styled.section`
  min-height: 90vh;
  display: flex;
  margin-top: 65px;
  padding-top: 10px;

  a {
    display: block;
    width: fit-content;
  }

  @media ${myTheme.media.tablet} {
    ${FlexWrapper} {
      flex-wrap: wrap;
      a {
        display: none;
      }
      div + div {
        margin: auto;
      }
    }
  }
`;

const SmallText = styled.span`
  max-width: 465px;
  font-weight: 400;
  line-height: 25px;
  margin-top: 32px;
  @media ${myTheme.media.mobile} {
    margin-top: 25px;
  }
`;
const Name = styled.span`
  font-size: 32px;
  font-weight: 600;
  line-height: 42px;
  color: ${(props) => props.theme.colors.colorTextAccent};
  span {
    color: ${(props) => props.theme.colors.colorAccent};
  }
`;
const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 42px;
  color: ${(props) => props.theme.colors.colorAccent};

  p {
    display: none;
  }
`;

const PhotoContainer = styled.div`
  width: 460px;
  height: 385px;
  overflow: hidden;
  position: relative;
  z-index: 1;

  & img {
    width: 100%;
    object-fit: cover;
  }
  &::before {
    content: url(${photologo});
    position: absolute;
    transform: scale(0.9);
    top: 100px;
    left: 45px;
    z-index: -1;
  }
  &::after {
    content: url(${dots});
    position: absolute;
    bottom: 56px;
    right: 15px;
    z-index: 2;
    background-size: cover;
  }

  @media ${myTheme.media.mobile} {
    width: 305px;
    height: 260px;

    &::after {
      transform: scale(0.7);
      bottom: 38px;
      right: 10px;
    }

    &::before {
      left: -10px;
      top: 55px;
      transform: scale(0.65);
    }
  }
`;

const PictureCaption = styled.span`
  display: block;
  border: 1px solid ${myTheme.colors.colorText};
  padding: 8px 36px;
  font-weight: 500;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: ${myTheme.colors.colorAccent};
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  b {
    font-weight: 600;
    color: ${myTheme.colors.colorTextAccent};
  }
`;

export const S = {
  Main,
  SmallText,
  Name,
  MainTitle,
  PhotoContainer,
  PictureCaption,
};
