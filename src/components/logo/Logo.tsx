import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

export const Logo = () => {
  return (
    <FlexWrapper align="center">
      <a href="#">
        <Icon iconId={"logo"} viewBox="0 -8 16 30"/>
      </a>
      <Name>Kvashnin Alexander</Name>
    </FlexWrapper>
  );
};

const Name = styled.span`
  color:${(props) => props.theme.colors.colorTextAccent};
`