import React from "react";
import styled from "styled-components";
import photoProfile from "../../../assets/images/fotoProfile.png";
import dots from "../../../assets/images/DotsFoto.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionLink } from "../../../components/sectionLink/SectionLink";
import { Container } from "../../../components/Container";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
        <FlexWrapper height="none" align="center">
          <SectionTitle width="326px">about-me</SectionTitle>
        </FlexWrapper>
        <GridWrapper>
          <TextConteiner>
            <span>Hello, i'm Alexander</span>

            <p>
              I’m a self-taught front-end developer based in Ekaterinburg. I can
              develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <SectionLink value="Read more" />
          </TextConteiner>
          <PhotoContainer>
            <img src={photoProfile} alt="web developer photo" />
          </PhotoContainer>
        </GridWrapper>
      </Container>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section`
  display: flex;
  min-height: 70vh;
  /* background-color: ${(props) => props.theme.colors.colorBG}; */
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const TextConteiner = styled.div`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  grid-column: 1/2;
  /* justify-self: center; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  a {
    margin-top: 0;
    /* align-content: flex-start;
    align-self: flex-start; */
  }
`;

const PhotoContainer = styled.div`
  grid-column: 2/3;
  align-self: flex-start;
  justify-self: center;
  max-width: 340px;
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
    top: 50px;
    left: 45px;
    z-index: -1;
  }
  &::after {
    content: url(${dots});
    position: absolute;
    bottom: 150px;
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
//340*507 размер фото
