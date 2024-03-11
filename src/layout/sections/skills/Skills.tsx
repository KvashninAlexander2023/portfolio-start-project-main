import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Icon } from "../../../components/icon/Icon";
import imgSkills from "../../../assets/images/GroupSkills.svg";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexWrapper height="none" align="center">
          <SectionTitle width="240px">skills</SectionTitle>
        </FlexWrapper>

        <FlexWrapper
          justify="space-between"
          wrap="wrap"
          height="none"
          gap="10px"
        >
          <SectionSVG>
            {/* <Icon iconId="blockSkill" width="349" height="283"  viewBox="0 0 349 283"/> */}
            <img src={imgSkills}></img>
          </SectionSVG>
          <SectionSkill>
            <FlexWrapper wrap="wrap" height="none" direction="column">
              <Skill
                title="Languages"
                description="TypeScript Python JavaScript"
              />
            </FlexWrapper>
            <FlexWrapper
              wrap="wrap"
              height="none"
              direction="column"
              gap="15px"
            >
              <Skill title="Databases" description="SQLite PostgreSQL Mongo" />
              <Skill title="Other" description="HTML CSS SCSS EJS REST Jinja" />
            </FlexWrapper>
            <FlexWrapper
              wrap="wrap"
              height="none"
              direction="column"
              gap="15px"
            >
              <Skill
                title="Tools"
                description="VSCode Figma Pixso Linux Git Neovim Font"
              />
              <Skill
                title="Frameworks"
                description="React Vue Disnake Discord.js Flask Express.js"
              />
            </FlexWrapper>
          </SectionSkill>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #282c33;
  min-height: 50vh;
  display: flex;
`;
const SectionSVG = styled.div`
  max-width: 350px;
  height: 280px;
  & img {
    width: 100%;
  }
  //background-color: #ebc8c8; */
  /* width: 40%; */
`;
const SectionSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-end;
  gap: 15px;
  width: 60%;
  color: #abb2bf;
`;
