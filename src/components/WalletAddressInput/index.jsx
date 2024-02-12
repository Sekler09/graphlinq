import React from 'react';
import { Container, InputContainer, Label } from './styled';

export default function WalletAddressInput({ label, value }) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>{value}</InputContainer>
    </Container>
  );
}
