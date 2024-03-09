import React from "react";
import styled from "styled-components";

type SectionLinkType = {
  value: string;
  padding?: string;
  content?: string;
};

export const SectionLink = (props: SectionLinkType) => {
  return (
    <Link href="#" padding={props.padding} content={props.content}>
      {props.value}
    </Link>
  );
};

type LinkType = {
  padding?: string;
  content?: string;
};
// ${(props) => props.direction || "row"}
const Link = styled.a<LinkType>`
  color: ${(props) => props.theme.colors.colorTextAccent};;
  border: 1px solid ${(props) => props.theme.colors.colorAccent};
  text-decoration: none;
  padding: ${(props) => props.padding || "8px 16px"};
  margin-top: 25px;

`;

  /* ${(props) =>
    props.content === "<~>" &&
    css<LinkType>`
      &:after {
        content: "<~>";
        display: inline-block;
      }
    `} */
    // &::after {
  //   content: "<~>";
  //   display: inline-block;

    /* width: 10px; */
  // }