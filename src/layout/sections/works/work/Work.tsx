import React from "react";
import styled from "styled-components";

type WorkPropsType = {
  technologiesStackList: string;
  descriptionTitle: string;
  text: string;
  src: string;
};

//
export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <WrapperImg>
        <Image src={props.src} alt="project image" />
      </WrapperImg>
      <TechnologyStackUsed>{props.technologiesStackList}</TechnologyStackUsed>
      <DescriptionGroupsStyled>
        <Title>{props.descriptionTitle}</Title>
        <Text>{props.text}</Text>
        <Link href={"#"}>Live </Link>
      </DescriptionGroupsStyled>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  max-width: 330px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  /* padding: 0;
  margin: 0; */
`;
const WrapperImg = styled.div`
  max-width: 330px;
  height: 200px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
  object-fit: cover;
`;

const TechnologyStackUsed = styled.p`
  border: 1px solid ${(props) => props.theme.colors.colorText};
  /* font-weight: 400; */
  padding: 8px;
  line-height: 21px;
`;
const DescriptionGroupsStyled = styled.div``;
const Title = styled.h3`
  color: ${(props) => props.theme.colors.colorTextAccent};
  padding: 16px;
  font-size: 24px;
  font-weight: 500;
  line-height: 31px;
`;
const Text = styled.p`
  padding: 0 16px;
  font-weight: 400;
  line-height: 21px;
`;

const Link = styled.a`
  display: inline-block;
  font-weight: 500;
  line-height: 21px;
  padding: 8px 16px;
  margin: 16px;
  color: inherit;
  border: 1px solid ${(props) => props.theme.colors.colorAccent};
  text-decoration: none;
  &::after {
    content: "<~>";
    display: inline-block;

    /* width: 10px; */
  }
`;

// color: rgb(255, 255, 255);
// font-family: Fira Code;
// font-size: 16px;
// font-weight: 500;
// line-height: 21px;
// letter-spacing: 0%;
// text-align: left;