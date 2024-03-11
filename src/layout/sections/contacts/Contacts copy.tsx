import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";

const Contacts = () => {
  return (
    <StyledAboutMe>
      <Container>
        <SectionTitle>contacts</SectionTitle>
        <TextConteiner justify="space-between">
          <p>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <div>
            <span>Message for here</span>
            <FlexWrapper align="center">
              <a href="#">
                <Icon iconId={"discord"} viewBox="0 -8 30 40" />
              </a>
              <span>!Elias#3519</span>
            </FlexWrapper>
            <FlexWrapper align="center">
              <a href="#">
                <Icon iconId={"email"} viewBox="0 -8 30 40" />
              </a>
              <span>elias@elias.me</span>
            </FlexWrapper>
          </div>
        </TextConteiner>
      </Container>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.div`
  display: flex;
  min-height: 70vh;
  background-color: ${(props) => props.theme.colors.colorBG};
`;
const TextConteiner = styled(FlexWrapper)`
  /* gap: 100px; */
  p {
    max-width: 500px;
  }

  & > div {
    max-width: 500px;
    min-width: 300px;
    border: 1px solid ${(props) => props.theme.colors.colorText};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

/* src={photo} alt="web designer photo" */
// clip-path: inset(0 0 30% 0)
/* background-position: -300px -110px; */
/* background-repeat: no-repeat; */
/* object-fit: cover; */
