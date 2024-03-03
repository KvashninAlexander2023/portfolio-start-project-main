import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Icon } from "../../../components/icon/Icon";
import imgSkills from "../../../assets/images/GroupSkills.svg"

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>skills</SectionTitle>

      <FlexWrapper justify="space-around" wrap="wrap">
        <SectionSVG>
          {/* <Icon iconId="blockSkill" width="349" height="283"  viewBox="0 0 349 283"/> */}
          <img src={imgSkills}></img>
        </SectionSVG>
        <SectionSkill>
          <Skill title="Languages" description="TypeScript Python JavaScript" />
          <Skill title="Databases" description="SQLite PostgreSQL Mongo" />
          <Skill title="Other" description="HTML CSS SCSS EJS REST Jinja" />
          <Skill
          title="Tools"
          description="VSCode Figma Pixso Linux Git Neovim Font"/>
          <Skill
          title="Frameworks"
          description="React Vue Disnake Discord.js Flask Express.js"/>
        </SectionSkill>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`

  background-color: #282c33;
  min-height: 50vh;
`;
const SectionSVG = styled.section`
  /* &img{
    color: red;
  }
  background-color: #ebc8c8; */
  /* width: 35%; */
`;
const SectionSkill = styled.section`
  display:flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 60%;
  color: #abb2bf
`;
