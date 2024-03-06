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
      <Image src={props.src} alt="" />
      <TechnologyStackUsed>{props.technologiesStackList}</TechnologyStackUsed>
      <DescriptionGroupsStyled>
        <h3>{props.descriptionTitle}</h3>
        <p>{props.text}</p>
        <Link href={"#"}>Live </Link>
      </DescriptionGroupsStyled>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  max-width: 330px;
  border: 1px solid ${(props) => props.theme.color.secondary};
  /* padding: 0;
  margin: 0; */
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  /* padding: 0;
  margin: 0; */
`;

const TechnologyStackUsed = styled.p`
  border: 1px solid ${(props) => props.theme.color.secondary};
  /* margin: 0; */
`;
const DescriptionGroupsStyled = styled.div`
  /* margin: 0; */
`;

const Link = styled.a`
  color: inherit;
  border: 1px solid ${(props) => props.theme.color.lineColor};
  text-decoration: none;
  &::after {
    content: "<~>";
    display: inline-block;

    /* width: 10px; */
  }
`;
