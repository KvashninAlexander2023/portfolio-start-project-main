import React from "react";
import styled from "styled-components";
import doubleQuote from "./../../../assets/images/“.svg";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { myTheme } from "../../../styles/Theme.styled";

export const Quote = () => {
  return (
    <QuoteConteiner>
      <Container>
        <FlexWrapper justify="center">
          <QuoteBlock>
            <Text>With great power comes great electricity bill</Text>
            <Author>— Dr. Who</Author>
          </QuoteBlock>
        </FlexWrapper>
      </Container>
    </QuoteConteiner>
  );
};

const QuoteConteiner = styled.section`
  display: flex;
  min-height: 25vh;
  padding: 50px 0;
`;

const QuoteBlock = styled.blockquote`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${myTheme.media.mobile} {
    p {
      font-size: 20px;
      padding: 24px;
    }
    p::after,
    p::before {
      transform: scale(0.8);
    }
    footer {
      font-size: 20px;
      padding: 18px;
    }
  }
`;

const Text = styled.p`
  /* width: auto; */
  height: auto;
  display: flex;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.colorText};
  font-size: 24px;
  font-weight: 500;
  line-height: 31px;
  /* line-height: 31px; */
  padding: 32px;

  &::before {
    content: url(${doubleQuote});
    width: 40px; // увеличивает контейнер
    text-align: center;
    position: absolute;
    background-color: ${(props) => props.theme.colors.colorBG};
    top: -10px;
    left: 16px;
    z-index: 2;
  }
  &::after {
    content: url(${doubleQuote});
    width: 40px; // увеличивает контейнер
    text-align: center;
    position: absolute;
    background-color: ${(props) => props.theme.colors.colorBG};
    bottom: -20px;
    right: 16px;
    z-index: 2;
    background-size: cover;
  }
`;
const Author = styled.footer`
  display: inline-block;
  width: fit-content;
  /* height: auto; */
  border: 1px solid ${(props) => props.theme.colors.colorText};
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  padding: 16px;
`;

// @media ${myTheme.media.tablet} {
//   flex-direction: column;
// }
// @media ${myTheme.media.mobile} {
//   a {
//     display: none;
//   }
// }
