import React from "react";
import styled from "styled-components";
import doubleQuote from "./../../../assets/images/“.svg";

export const Quote = () => {
  return (
    <QuoteConteiner>
      {/* <div> */}
      <blockquote>
        <p>With great power comes great electricity bill</p>
        <footer>— Dr. Who </footer>
      </blockquote>
      {/* </div> */}
    </QuoteConteiner>
  );
};

const QuoteConteiner = styled.div`
  /* display:flex; */
  padding-top: 50px;
  text-align: center;
  min-height: 20vh;
  background-color: ${(props) => props.theme.color.colorBG};
  position: relative;

  blockquote {

    /* display: flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap; */
    max-width: 500px;
    margin: 0 auto;

    p {
      padding: 15px;
      border: 1px solid ${(props) => props.theme.color.colorText};
      /* display: inline; */
    }
    footer {
      border: 1px solid ${(props) => props.theme.color.colorText};
      padding: 10px;
      /* display: inline-block; */
    }
  }
  &::before {
    content: url(${doubleQuote});
    width: 40px; // увеличивает контейнер
    position: absolute;
    background-color: ${(props) => props.theme.color.colorBG};
    top: 40px;
    left: 450px;
    z-index: 2;
  }
  &::after {
    content: url(${doubleQuote});
    width: 40px; // увеличивает контейнер
    position: absolute;
    background-color: ${(props) => props.theme.color.colorBG};
    bottom: 10px;
    right: 450px;
    z-index: 2;
    background-size: cover;
  }
`;
