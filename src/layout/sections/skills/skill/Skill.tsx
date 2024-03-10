import styled from "styled-components";

type SkillPropsType = {
  title: string;
  description: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.description}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
width: 180px;
`;
const SkillTitle = styled.h3`

outline: 1px solid #abb2bf;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  color: ${(props) => props.theme.colors.colorTextAccent};


`;
const SkillText = styled.p`
  outline: 1px solid #abb2bf;
  padding: 8px;
  line-height: 1.6em;
  
`;
