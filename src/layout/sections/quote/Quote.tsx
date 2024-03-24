import React from "react";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Quote_Styles";

export const Quote:React.FC = () => {
  return (
    <S.QuoteContainer>
      <Container>
        <FlexWrapper justify="center">
          <S.QuoteBlock>
            <S.Text>With great power comes great electricity bill</S.Text>
            <S.Author>— Dr. Who</S.Author>
          </S.QuoteBlock>
        </FlexWrapper>
      </Container>
    </S.QuoteContainer>
  );
};



