import React from "react";
import styled from "styled-components";
import photoProfile from "../../../assets/images/fotoProfile.png";
import dots from "../../../assets/images/DotsFoto.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <SectionTitle>about-me</SectionTitle>
      <FlexWrapper>
          <TextConteiner>
            <span>Hello, i'm Alexander</span>

            <p>
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <button>Read more</button>
          </TextConteiner>
        <PhotoContainer>
          <img src={photoProfile} alt="web developer photo" />
        </PhotoContainer>
      </FlexWrapper>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.div`
  min-height: 70vh;
  background-color: ${(props) => props.theme.color.colorBG};
`;
const TextConteiner = styled.div`
max-width: 60%
`;

const PhotoContainer = styled.div`
  max-width: 1000px;
  height: 508px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  & img {
    width: 100%;
    /* height: auto; */
  }
  &::before {
    content: url(${dots});
    position: absolute;
    /* width: 40px; */
    transform: scale(1);
    top: 100px;
    left: 45px;
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
