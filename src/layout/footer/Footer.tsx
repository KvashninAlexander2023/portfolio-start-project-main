import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Logo } from "../../components/logo/Logo";

export const Footer = () => {
  return (
    <StyledFooter>
        <ProfessionDescription>
          <Logo/>
          <span>Web designer and front-end developer</span>
        </ProfessionDescription>
        <SocialList>
          <span>Media</span>
          <SocialItem>
              <SocialLink>
                <Icon iconId="github"/>
              </SocialLink>
          </SocialItem>
          <SocialItem>
              <SocialLink>
                <Icon iconId="telegram"/>
              </SocialLink>
          </SocialItem>
          <SocialItem>
              <SocialLink>
                <Icon iconId="discord"/>
              </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© Copyright 2024. Made by Elias</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 50vh;
  background-color: ${(props) => props.theme.color.colorBG};
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;


const ProfessionDescription = styled.div`
width: 50%;
 /* flex-grow: 1; */
`;
const SocialList = styled.ul`
width: 50%;
  /* flex-grow: 1; */
`;
const SocialItem = styled.li`
 
`;
const SocialLink = styled.a`
 
`;
const Copyright = styled.small`
 
`;
