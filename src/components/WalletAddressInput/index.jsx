import React, { useRef, useState } from 'react';
import { Container, Input, InputContainer, Label } from './styled';

export default function WalletAddressInput({ label }) {
  const [address, setAddress] = useState('');
  const inputRef = useRef();
  const handleAddressChange = e => {
    setAddress(e.target.value);
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
          type="text"
          onChange={handleAddressChange}
          value={address}
          placeholder="Wallet address or ENS name"
          ref={inputRef}
        />
      </InputContainer>
    </Container>
  );
}
