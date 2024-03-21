import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Icon } from "../../../components/icon/Icon";
import imgSkills from "../../../assets/images/GroupSkills.svg";
import { Container } from "../../../components/Container";
import { myTheme } from "../../../styles/Theme.styled";

const skillsData = [
  { title: "Tools", technologies: "VSCode Figma Pixso Linux Git Neovim Font" },

  {
    title: "Frameworks",
    technologies: "React Vue Disnake Discord.js Flask Express.js",
  },

  { title: "Databases", technologies: "SQLite PostgreSQL Mongo" },
  { title: "Other", technologies: "HTML CSS SCSS EJS REST Jinja" },

  { title: "Languages", technologies: "TypeScript Python JavaScript" },
];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexWrapper height="none" align="center">
          <SectionTitle width="240px">skills</SectionTitle>
        </FlexWrapper>
        <SkillsWrapper>
          <SectionSVG>
            {/* <Icon iconId="blockSkill" width="349" height="283"  viewBox="0 0 349 283"/> */}
            <img src={imgSkills}></img>
          </SectionSVG>
          <SectionSkill>
            {skillsData.map((skill, index) => {
              return (
                <Skill
                  key={index}
                  title={skill.title}
                  technologies={skill.technologies}
                />
              );
            })}
          </SectionSkill>
        </SkillsWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #282c33;
  min-height: 50vh;
  display: flex;
`;

const SkillsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    justify-content: center;
    width: 100%;
  }
`;

const SectionSVG = styled.div`
  min-width: 350px;
  min-height: 280px;
  & img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
  //background-color: #ebc8c8; */
  /* width: 40%; */
`;
const SectionSkill = styled.div`
  max-width: 608px;
  height: 300px;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: column;
  align-content: flex-start;
  /* justify-content: flex-end; */
  gap: 15px;
  /* justify-content: space-between; */
  /* } */
  /* max-width: fit-content; */
  color: #abb2bf;

  @media ${myTheme.media.tablet} {
    /* justify-content: center; */
    height: 100%;
    flex-direction: row;
    /* flex-wrap: wrap; */
    /* align-content: center; */
    justify-content: center;
    /* width: 100%; */
  }
`;

{
  /* <FlexWrapper wrap="nowrap" height="none" direction="column">
              <Skill/> */
}
