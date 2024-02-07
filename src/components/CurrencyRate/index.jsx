import React from 'react';
import { Container, RateValue } from './styled';

export default function CurrencyRate({ icon, rate }) {
  return (
    <Container>
      {icon}
      <RateValue>${rate.toLocaleString('en')}</RateValue>
    </Container>
  );
}
