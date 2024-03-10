import styled from "styled-components";

type FlexWrapperType = {
  display?: string;
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  grow?: string;
  height?: string;
};

export const FlexWrapper = styled.div<FlexWrapperType>`
  display: ${(props) => props.display ||"flex"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "none"};
  flex-grow: ${(props) => props.grow || "0"};
  height: ${(props) => props.height || "100%"};
  
`;

//new commit