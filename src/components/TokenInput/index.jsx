import React, { useRef, useState } from 'react';
import TokenSelect from 'components/TokenSelect';
import {
  Container,
  DollarsAmount,
  Input,
  InputContainer,
  Label,
} from './styled';

export default function TokenInput({ label, selected }) {
  const dollars = 4675.89;
  const [width, setWidth] = useState(0);
  const [amount, setAmount] = useState('');
  const inputRef = useRef();

  const handleAmountChange = e => {
    setWidth(e.target.value.length);
    setAmount(e.target.value);
  };

  return (
    <Container
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <Label>{label}</Label>
      <InputContainer>
        <Input
          style={{ width: `${width * 0.8}ch` }}
          type="text"
          onChange={handleAmountChange}
          value={amount}
          placeholder="0"
          ref={inputRef}
        />
        {amount && (
          <DollarsAmount>$ {dollars.toLocaleString('en')}</DollarsAmount>
        )}
        <div id="select" style={{ marginLeft: 'auto' }}>
          <TokenSelect selected={selected} />
        </div>
      </InputContainer>
    </Container>
  );
}
