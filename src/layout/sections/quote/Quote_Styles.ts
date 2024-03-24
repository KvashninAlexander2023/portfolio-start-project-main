import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import doubleQuote from "./../../../assets/images/“.svg";


  const QuoteContainer = styled.section`
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
  height: auto;
  display: flex;
  position: relative;
  border: 1px solid ${myTheme.colors.colorText};
  font-size: 24px;
  font-weight: 500;
  line-height: 31px;
  padding: 32px;

  &::before {
    content: url(${doubleQuote});
    width: 40px; // увеличивает контейнер
    text-align: center;
    position: absolute;
    background-color: ${myTheme.colors.colorBG};
    top: -10px;
    left: 16px;
    z-index: 2;
  }
  &::after {
    content: url(${doubleQuote});
    width: 40px; // увеличивает контейнер
    text-align: center;
    position: absolute;
    background-color: ${myTheme.colors.colorBG};
    bottom: -20px;
    right: 16px;
    z-index: 2;
    background-size: cover;
  }
`;

const Author = styled.footer`
  display: inline-block;
  width: fit-content;
  border-width: 0 1px 1px 1px ; /* верхнее правое нижнее левое */
  border-color: ${myTheme.colors.colorText};
  border-style: solid;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  padding: 16px;
`;

export const S = {
  QuoteContainer,
  QuoteBlock,
  Text,
  Author
  
}