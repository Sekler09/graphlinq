import React from 'react';
import TokenSelect from 'components/TokenSelect';
import {
  AmountContainer,
  Container,
  DollarsAmount,
  InputContainer,
  Label,
  TokensAmount,
} from './styled';

export default function TokenInput({ label, tokensAmount, selected }) {
  const dollars = 4675.89;
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <AmountContainer>
          <TokensAmount>{tokensAmount}</TokensAmount>
          {!!tokensAmount && (
            <DollarsAmount>$ {dollars.toLocaleString('en')}</DollarsAmount>
          )}
        </AmountContainer>
        <TokenSelect selected={selected} />
      </InputContainer>
    </Container>
  );
}
