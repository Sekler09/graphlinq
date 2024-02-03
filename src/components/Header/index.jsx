import React, { useState } from 'react';

import { ReactComponent as GLQIcon } from 'assets/icons/glq-icon.svg';
import { ReactComponent as ETHIcon } from 'assets/icons/eth-icon.svg';
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';
import { ReactComponent as CoinIcon } from 'assets/icons/coin.svg';
import { ReactComponent as ChainIcon } from 'assets/icons/chain.svg';
import { ReactComponent as BridgeIcon } from 'assets/icons/bridge.svg';
import Logo from 'components/Logo';
import CurrencyRate from 'components/CurrencyRate';
import {
  ButtonTitle,
  ConnectButton,
  FlexContainer,
  Nav,
  PlusIcon,
  Span,
  StyledHeader,
  WalletContainer,
  ConnectWalletIcon,
  WalletValue,
  WalletAddress,
  Address,
  MoreIcon,
  WalletCurrencyContainer,
  WalletIcon,
  WalletInfoContainer,
} from './styled';
import NavigationLink from '../NavigationLink';

export default function Header() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = () => setIsWalletConnected(true);

  return (
    <StyledHeader>
      <Span>
        <FlexContainer $gap={40}>
          <Logo />
          <FlexContainer $gap={16}>
            <CurrencyRate icon={<GLQIcon />} rate={0.02743} />
            <CurrencyRate icon={<ETHIcon />} rate={2239.02} />
          </FlexContainer>
        </FlexContainer>
      </Span>
      <Nav>
        <NavigationLink
          icon={<DashboardIcon />}
          to="/dashboard"
          title="Dashboard"
        />
        <NavigationLink icon={<CoinIcon />} to="/coin" title="Coin Info" />
        <NavigationLink icon={<ChainIcon />} to="/chain" title="Chain Status" />
        <NavigationLink icon={<BridgeIcon />} to="/" title="Bridge" />
      </Nav>
      <Span>
        {!isWalletConnected ? (
          <ConnectButton onClick={connectWallet}>
            <ConnectWalletIcon />
            <ButtonTitle>Connect Wallet</ButtonTitle>
          </ConnectButton>
        ) : (
          <WalletInfoContainer>
            <WalletContainer>
              <WalletCurrencyContainer>
                <GLQIcon />
              </WalletCurrencyContainer>
              <WalletValue>334.02</WalletValue>
              <PlusIcon />
            </WalletContainer>
            <WalletAddress>
              <WalletIcon />
              <Address>0x0549a...88Efc</Address>
            </WalletAddress>
            <MoreIcon />
          </WalletInfoContainer>
        )}
      </Span>
    </StyledHeader>
  );
}
