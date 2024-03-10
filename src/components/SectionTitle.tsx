import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";
import { ReactNode } from "react";

type SectionTitleTypes = {
  children: ReactNode;
  width?: string;
};

export const SectionTitle = ({ children, width }: SectionTitleTypes) => {
  return (
    <StyledDiv width={width}>
      <StyledSectionTitle>{children}</StyledSectionTitle>
    </StyledDiv>
  );
};

const StyledDiv = styled.div<{ width?: string }>`
  display: block;
  position: relative;
  &::after {
    content: "";
    /* display: block; */
    width: ${(props) => props.width || "500px"};
    position: absolute;
    left: 100%;
    top: 50%;
    border-bottom: 1px solid ${myTheme.colors.colorAccent};
    /* height: 1px; */
    /* background-color: ${myTheme.colors.colorAccent}; */
    color: ${myTheme.colors.colorAccent}; // Цвет линии
    /* position:  absolute; */
    margin-left: 0.5em; //Расстояние между линией и заголовком
    font-size: 12px;

    /* top: 50%; */
    /* left: 10px;
    right: 10px; */
  }
`;
const StyledSectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  padding: 20px 0;
  position: relative;
  // overflow: hidden;

  &::before {
    content: "#";
    display: inline-block;
    color: ${myTheme.colors.colorAccent};
    /* margin-right: 0.1em;  */
  }
`;

//  &::before {
//   content: "#";
//   display: block;
//   width: 50px;
//   height: auto;
//   color: ${myTheme.colors.colorAccent};
//    margin-right: 0.2em;
//  }
