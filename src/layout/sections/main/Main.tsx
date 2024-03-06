import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/foto1.png";
import dots from "../../../assets/images/DotsFoto.svg";
import photologo from "../../../assets/images/LogoFoto.svg";
import men from "../../../assets/images/Men.png";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <span>Elias is a web designer and</span>
          <h1>front-end developer</h1>
          <span>
            He crafts responsive websites where technologies meet creativity
          </span>
          <button>Contact me!!</button>
        </div>
        <FlexWrapper justify="center" direction="column" align="center">
          <PhotoContainer >
            <img src={photo} alt='web developer photo'/>
          </PhotoContainer>
          <span>Currently working on Portfolio</span>
        </FlexWrapper>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 50vh;
  background-color: #282c33; //#8f8b8b;
`;

const PhotoContainer = styled.div`
  width: 460px;
  height: 385px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  & img{
    width: 100%;
    /* height: auto; */
  }
  &::before {
    content: url(${photologo});
    position: absolute;
    top: 100px;
    left: 50px;
    z-index: -1;
  }
  &::after {
    content: url(${dots});
    position: absolute;
    bottom: 100px;
    right: 30px;
    z-index: 2;
    background-size: cover;
  }
`;

/* src={photo} alt="web designer photo" */
// clip-path: inset(0 0 30% 0)
/* background-position: -300px -110px; */
/* background-repeat: no-repeat; */
/* object-fit: cover; */
