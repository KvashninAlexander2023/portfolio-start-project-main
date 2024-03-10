import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import chertNodes from "../../../assets/images/ChertNodes2.png";
import protectX from "../../../assets/images/ProtectX.png";
import kahoot from "../../../assets/images/Kahoot.png";
import { Container } from "../../../components/Container";

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <FlexWrapper direction="column" justify="center">
          <FlexWrapper justify="space-between" height="none" align="center">
            <SectionTitle width="510px">projects</SectionTitle>
            <a href="#">View all</a>
          </FlexWrapper>
          <FlexWrapper wrap="wrap" align="flex-start" justify="center">
            <Work
              technologiesStackList=" SCSS Python Flask"
              src={chertNodes}
              descriptionTitle="ChertNodes"
              text="Minecraft servers hosting "
            />
            <Work
              technologiesStackList="React Express Discord.js Node.js HTML SCSS Python Flask"
              src={protectX}
              descriptionTitle="ProtectX"
              text="Discord anti-crash bot"
            />
            <Work
              technologiesStackList="CSS Express Node.js"
              src={kahoot}
              descriptionTitle="Kahoot Answer Viewer"
              text="Get answers to yuor kahoot quiz"
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 70vh;
  display: flex;
  /* background-color: ${(props) => props.theme.colors.colorBG}; */
`;

// const TitleLineStyled = styled.div`
//   display: flex;
// `;
