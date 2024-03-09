import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/foto1.png";
import dots from "../../../assets/images/DotsFoto.svg";
import photologo from "../../../assets/images/LogoFoto.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { SectionLink } from "../../../components/sectionLink/SectionLink";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-around">
          <FlexWrapper align="flex-start" direction="column" justify="center" >
            <Name>Elias is a <span>web designer</span> and</Name>
            <MainTitle>front-end developer</MainTitle>
            <SmallText>
              He crafts responsive websites where technologies meet creativity
            </SmallText>
            <SectionLink value="Contact me!!"/>
          </FlexWrapper>
          <FlexWrapper justify="center" direction="column" align="center">
            <PhotoContainer>
              <img src={photo} alt="web developer photo" />
            </PhotoContainer>
            <PictureCaption>Currently working on <b>Portfolio</b></PictureCaption>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;

`;
const SmallText = styled.span`
max-width: 465px;
font-weight: 400;
line-height: 25px;
margin-top: 32px;
`;
const Name = styled.span`
font-size: 32px;
font-weight: 600;
line-height: 42px;
color: ${(props) => props.theme.colors.colorTextAccent};
span{
  color:  ${(props) => props.theme.colors.colorAccent};
}
`;
const MainTitle = styled.h1`
font-size: 32px;
font-weight: 600;
line-height: 42px;
color:  ${(props) => props.theme.colors.colorAccent};
`;

const PhotoContainer = styled.div`
  width: 460px;
  height: 385px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  & img {
    width: 100%;
    /* height: auto; */
  }
  &::before {
    content: url(${photologo});
    position: absolute;
    /* width: 40px; */
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
`;

const PictureCaption = styled.span`
padding: 8px 0;
font-weight: 500;
position: relative;
&::before{
  content: "";
  position: absolute;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.colors.colorAccent};
  left: -20px ;
  top: 10px;
}

b{
  font-weight: 600;
}
/* 
letter-spacing: 0%; */
/* text-align: left; */
/* font-size: 16px; */
`

/* src={photo} alt="web designer photo" */
// clip-path: inset(0 0 30% 0)
/* background-position: -300px -110px; */
/* background-repeat: no-repeat; */
/* object-fit: cover; */
