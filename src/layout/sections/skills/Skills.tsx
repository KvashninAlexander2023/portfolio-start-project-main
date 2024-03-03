import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>skills</SectionTitle>

      <FlexWrapper>
        <div>Блок SVG</div>
        <Skill title="Languages" description="TypeScript Python JavaScript" />
        <Skill title="Databases" description="SQLite PostgreSQL Mongo" />
        <Skill title="Other" description="HTML CSS SCSS EJS REST Jinja" />
        <Skill
          title="Tools"
          description="VSCode Figma Pixso Linux Git Neovim Font"
        />
        <Skill
          title="Frameworks"
          description="React Vue Disnake Discord.js Flask Express.js"
        />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #b9a9a9;
`;
