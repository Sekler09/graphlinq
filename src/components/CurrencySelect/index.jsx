import React, { useState } from 'react';

import { ReactComponent as GLQIcon } from 'assets/icons/glq-icon.svg';
import { ReactComponent as BTCIcon } from 'assets/icons/btc-icon.svg';
import { ReactComponent as USDTIcon } from 'assets/icons/usdt-icon.svg';
import { ReactComponent as ETHIcon } from 'assets/icons/eth-icon.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import {
  ArrowIcon,
  Currency,
  CurrencyFullName,
  Option,
  OptionsContainer,
  Select,
  SelectContainer,
} from './styled';

export default function CurrencySelect() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContainer>
      <Select
        onClick={() => {
          setIsOpen(prev => !prev);
        }}
      >
        <GLQIcon />
        <Currency>GLQ</Currency>
        <CurrencyFullName>Graphlink Chain</CurrencyFullName>
        <ArrowIcon $isOpen={isOpen} />
      </Select>
      {isOpen && (
        <OptionsContainer>
          <Option onClick={() => setIsOpen(false)}>
            <GLQIcon />
            <Currency>GLQ</Currency>
            <CurrencyFullName>Graphlink Chain</CurrencyFullName>
            <CheckIcon />
          </Option>
          <Option onClick={() => setIsOpen(false)}>
            <BTCIcon />
            <Currency>BTC</Currency>
            <CurrencyFullName>Bitcoin</CurrencyFullName>
          </Option>
          <Option onClick={() => setIsOpen(false)}>
            <USDTIcon />
            <Currency>USDT</Currency>
            <CurrencyFullName>Tether USDt</CurrencyFullName>
          </Option>
          <Option onClick={() => setIsOpen(false)}>
            <ETHIcon />
            <Currency>ETH</Currency>
            <CurrencyFullName>Ethereum</CurrencyFullName>
          </Option>
        </OptionsContainer>
      )}
    </SelectContainer>
  );
}
