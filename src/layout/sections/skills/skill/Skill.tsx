import styled from "styled-components";

type SkillPropsType = {
  title: string;
  technologies: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.technologies}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
max-width: 196px;
width: 100%;
outline: 1px solid #abb2bf;

`;
const SkillTitle = styled.h3`
  border-bottom: 1px solid #abb2bf;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  color: ${(props) => props.theme.colors.colorTextAccent};


`;
const SkillText = styled.p`
  
  padding: 8px;
  line-height: 1.6em;
  
`;
