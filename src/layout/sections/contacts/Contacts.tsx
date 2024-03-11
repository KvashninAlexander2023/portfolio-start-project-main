import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import Email from "../../../assets/images/Email.svg"

export const Contacts = () => {
  return (
    <StyledAboutMe>
      <Container>
      <FlexWrapper height="none" align="center">
          <SectionTitle width="127px">contacts</SectionTitle>
        </FlexWrapper>
        <TextConteiner>
          <Text>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </Text>
          <MessageWrapper>
            <span>Message for here</span>
            <FlexWrapper align="center" height="none" >
              <a href="#">
                <Icon iconId={"discord"} viewBox="0 -8 30 40" />
              </a>
              <span>!Elias#3519</span>
            </FlexWrapper>
            <FlexWrapper align="center" height="none">
              <a href="#">
                <img src={Email} />
              </a>
              <span>elias@elias.me</span>
            </FlexWrapper>
          </MessageWrapper>
        </TextConteiner>
      </Container>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.div`
  display: flex;
  min-height: 40vh;
  background-color: ${(props) => props.theme.colors.colorBG};
`;

const TextConteiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
`
const Text = styled.div`
  grid-column: 1/2;
  font-size: 16px;
font-weight: 500;
line-height: 21px;
`
const MessageWrapper = styled.div`
    grid-column: 2/3;
    justify-self: end;
    border: 1px solid ${(props) => props.theme.colors.colorText};
    padding: 16px;


   & > span{
      display: inline-block;
      font-size: 16px;
      font-weight: 600;
      line-height: 21px;
      color: ${(props) => props.theme.colors.colorTextAccent};
      margin-bottom: 16px;
    }
    
    a{
      color: ${(props) => props.theme.colors.colorText};
    }

`


// const TextConteiner = styled(FlexWrapper)`
//   height: none;
//   /* gap: 100px; */
//   p {
//     max-width: 500px;
//   }

//   & > div {
//     max-width: 500px;
//     min-width: 300px;
//     border: 1px solid ${(props) => props.theme.colors.colorText};
//     display: flex;
//     flex-direction: column;
//     align-items: center;
    
//   }
// `;

/* src={photo} alt="web designer photo" */
// clip-path: inset(0 0 30% 0)
/* background-position: -300px -110px; */
/* background-repeat: no-repeat; */
/* object-fit: cover; */
