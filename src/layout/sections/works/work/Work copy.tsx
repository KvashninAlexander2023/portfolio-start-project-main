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
        <h3>{props.descriptionTitle}</h3>
        <p>{props.text}</p>
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

  /* padding: 0;
  margin: 0; */
`;

const TechnologyStackUsed = styled.p`
  border: 1px solid ${(props) => props.theme.colors.colorText};
  /* margin: 0; */
`;
const DescriptionGroupsStyled = styled.div`
  /* margin: 0; */
`;

const Link = styled.a`
  color: inherit;
  border: 1px solid ${(props) => props.theme.colors.colorAccent};
  text-decoration: none;
  &::after {
    content: "<~>";
    display: inline-block;

    /* width: 10px; */
  }
`;
