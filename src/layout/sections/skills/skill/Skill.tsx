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
  border: 1px solid #abb2bf;
  margin: 0

`;
const SkillText = styled.p`
  border: 1px solid #abb2bf;
  margin: 0
`;
