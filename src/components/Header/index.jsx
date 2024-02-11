import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as GLQIcon } from 'assets/icons/glq-icon.svg';
import { ReactComponent as ETHIcon } from 'assets/icons/eth-icon.svg';
import Logo from 'components/Logo';
import Nav from 'components/Nav';
import CurrencyRate from 'components/CurrencyRate';
import { connectWallet } from 'store/slices/walletSlice';
import {
  ButtonTitle,
  ConnectButton,
  FlexContainer,
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
  NavContainer,
  RatesContainer,
} from './styled';

export default function Header() {
  const isWalletConnected = useSelector(state => state.wallet.isConnected);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <Span>
        <FlexContainer $gap={40}>
          <Logo />
          <RatesContainer>
            <CurrencyRate icon={<GLQIcon />} rate={0.02743} />
            <CurrencyRate icon={<ETHIcon />} rate={2239.02} />
          </RatesContainer>
        </FlexContainer>
      </Span>
      <NavContainer>
        <Nav />
      </NavContainer>
      <Span>
        {!isWalletConnected ? (
          <ConnectButton onClick={() => dispatch(connectWallet())}>
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
