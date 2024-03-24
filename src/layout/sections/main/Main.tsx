import React from "react";
import photo from "../../../assets/images/foto1.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { SectionLink } from "../../../components/sectionLink/SectionLink";
import Typewriter from "typewriter-effect";
import { S } from "./Main_Styles";

export const Main:React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align="center" wrap="nowrap" justify="space-between">
          <div>
            <S.Name>
              Elias is a <span>web designer</span> and
            </S.Name>
            <S.MainTitle>
              <p>front-end developer</p>
              <Typewriter
                options={{
                  strings: ["front-end developer"],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                }}
              />
            </S.MainTitle>
            <S.SmallText>
              He crafts responsive websites where technologies meet creativity
            </S.SmallText>
            <SectionLink value="Contact me!!" />
          </div>
          <div>
            <S.PhotoContainer>
              <img src={photo} alt="web developer photo" />
            </S.PhotoContainer>
            <S.PictureCaption>
              Currently working on <b>Portfolio</b>
            </S.PictureCaption>
          </div>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};



