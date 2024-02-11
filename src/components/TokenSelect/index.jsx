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
  IconContainer,
  NotSelect,
  Option,
  OptionsContainer,
  Select,
  SelectContainer,
} from './styled';

export default function TokenSelect({ selected }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContainer>
      {selected ? (
        <Select
          onClick={() => {
            setIsOpen(prev => !prev);
          }}
          $isOpen={isOpen}
        >
          {selected && (
            <IconContainer>
              <GLQIcon />
            </IconContainer>
          )}
          <Currency>GLQ</Currency>
          <ArrowIcon $isOpen={isOpen} />
        </Select>
      ) : (
        <NotSelect
          onClick={() => {
            setIsOpen(prev => !prev);
          }}
        >
          <Currency>Select token</Currency>
          <ArrowIcon $isOpen={isOpen} />
        </NotSelect>
      )}
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
