import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/image-preview.png";
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
          <Photo src={photo} alt="web designer photo" />
          <span>Currently working on Portfolio</span>
        </FlexWrapper>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #8f8b8b; //#282c33
`;

const Photo = styled.img`
  width: 457px;
  height: 386px;
  object-fit: cover;
`;
