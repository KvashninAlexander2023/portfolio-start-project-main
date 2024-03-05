import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/foto1.png";
import dots from "../../../assets/images/DotsFoto.svg";
import phologoto2 from "../../../assets/images/LogoFoto.svg";
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
          <Photo></Photo>
          <span>Currently working on Portfolio</span>
        </FlexWrapper>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 50vh;
  background-color: #8f8b8b; //#282c33
`;

const Photo = styled.div`
  width: 460px;
  height: 385px;
  background-image: url(${photo});
  background-size: cover;
`;

/* src={photo} alt="web designer photo" */
// clip-path: inset(0 0 30% 0)
 /* background-position: -300px -110px; */
  /* background-repeat: no-repeat; */
  /* object-fit: cover; */