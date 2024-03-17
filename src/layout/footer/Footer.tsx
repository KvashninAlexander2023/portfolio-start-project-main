import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { myTheme } from "../../styles/Theme.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <WrapperFooterContent>
          <ProfessionDescription>
            <Logo height="none" />
            <Email>elias@elias-dev.ml</Email>
            <Text>Web designer and front-end developer</Text>
          </ProfessionDescription>
          <WrapperMediaContent>
            <span>Media</span>
            <SocialList>
              <SocialItem>
                <SocialLink>
                  <Icon iconId="github" />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink>
                  <Icon iconId="telegram" />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink>
                  <Icon iconId="discord" />
                </SocialLink>
              </SocialItem>
            </SocialList>
          </WrapperMediaContent>
          <Copyright>© Copyright 2024. Made by Elias</Copyright>
        </WrapperFooterContent>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 208px;
  background-color: ${(props) => props.theme.colors.colorBG};
  display: flex;
  border-top: 1px solid ${(props) => props.theme.colors.colorText};
  /* justify-content: space-around;
  flex-wrap: wrap; */
`;

const WrapperFooterContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;

  @media ${myTheme.media.mobile} {
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   justify-content: center;
   align-items: center;

  }
`;

const ProfessionDescription = styled.div`
  grid-column: 1/2;

  display: grid;
  grid-template-columns: 1fr 1fr;

  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  margin-top: 32px;
  gap: 10px;


  /* Logo{
    grid-column: 1/2;
  } */
  /* width: 50%; */
  /* flex-grow: 1; */
`;


const Email = styled.span`
  grid-column: 2/3;
  align-self: center;
  white-space: nowrap;
  
`
const Text = styled.span`
  color: ${(props) => props.theme.colors.colorTextAccent};
  grid-column: 1/3;
  justify-self: left;
  padding-left: 10px;

`



const SocialList = styled.ul`
  grid-column: 2/3;
  display: flex;
  gap: 8px;
  transform: translateX(-5px);
  
  @media ${myTheme.media.mobile} {
    transform: translateX(0px);
  
  }
  
  /* width: 50%; */
  /* flex-grow: 1; */
`;
const SocialItem = styled.li`
  /* display: inline-block; */
`;
const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.colorText};
  &:hover {
    color: ${(props) => props.theme.colors.colorHover};
  }
`;
const Copyright = styled.small`
  padding: 32px 0;
  grid-column: 1/3;
  /* display: grid; */
  /* justify-content: center; */
  /* align-self: end; */
  justify-self: center;
`;

const WrapperMediaContent = styled.div`

  justify-self: end;
  margin-top: 32px;
  span {
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    line-height: 31px;
    color: ${(props) => props.theme.colors.colorHover};
    margin-bottom: 12px;
  }


  @media ${myTheme.media.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
