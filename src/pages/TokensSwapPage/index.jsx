import { useDispatch, useSelector } from 'react-redux';

import TokenInput from 'components/TokenInput';
import { connectWallet } from 'store/slices/walletSlice';

import { ReactComponent as SwapIcon } from 'assets/icons/swap.svg';
import { ReactComponent as WalletIcon } from 'assets/icons/connect-wallet.svg';

import { useState } from 'react';
import {
  ArrowIcon,
  AvailableAmount,
  AvailableAmountContainer,
  AvailableAmountToken,
  AvailableContainer,
  AvailableTitle,
  ButtonTitle,
  ConnectButton,
  DollarsAmount,
  Equality,
  ExtraInfoContainer,
  ExtraInfoTitle,
  ExtraInfoValue,
  InputsContainer,
  Line,
  MainInfoContainer,
  SwapButton,
  SwapInfoContainer,
  SwapTokensButton,
  Token,
} from './styled';

export default function TokensSwapPage() {
  const isWalletConnected = useSelector(state => state.wallet.isConnected);
  const dispatch = useDispatch();

  const [isInfoOpened, setIsInfoOpened] = useState(false);

  return (
    <>
      {isWalletConnected && (
        <AvailableContainer>
          <AvailableTitle>Available</AvailableTitle>
          <AvailableAmountContainer>
            <AvailableAmount>4.02</AvailableAmount>
            <AvailableAmountToken>WETH</AvailableAmountToken>
          </AvailableAmountContainer>
        </AvailableContainer>
      )}
      <InputsContainer>
        <TokenInput
          label="You pay"
          tokensAmount={isWalletConnected ? 2 : 0}
          selected
        />
        <SwapButton>
          <SwapIcon />
        </SwapButton>
        <TokenInput
          label="You get"
          tokensAmount={isWalletConnected ? 11826.8 : 0}
          selected={isWalletConnected}
        />
      </InputsContainer>
      {isWalletConnected && (
        <SwapInfoContainer onClick={() => setIsInfoOpened(prev => !prev)}>
          <MainInfoContainer>
            <Token>1 WETH</Token>
            <Equality>=</Equality>
            <Token>5,913 1INCH</Token>
            <DollarsAmount>$ 2,326.5</DollarsAmount>
            <ArrowIcon $isOpen={isInfoOpened} />
          </MainInfoContainer>
          {isInfoOpened && (
            <>
              <Line />
              <ExtraInfoContainer>
                <ExtraInfoTitle>Max slippage</ExtraInfoTitle>
                <ExtraInfoValue>0.5%</ExtraInfoValue>
              </ExtraInfoContainer>
              <ExtraInfoContainer>
                <ExtraInfoTitle>Fee</ExtraInfoTitle>
                <ExtraInfoValue>$ 0</ExtraInfoValue>
              </ExtraInfoContainer>
              <ExtraInfoContainer>
                <ExtraInfoTitle>Network cost</ExtraInfoTitle>
                <ExtraInfoValue>$ 16.89</ExtraInfoValue>
              </ExtraInfoContainer>
            </>
          )}
        </SwapInfoContainer>
      )}
      {!isWalletConnected ? (
        <ConnectButton onClick={() => dispatch(connectWallet())}>
          <WalletIcon />
          <ButtonTitle>Connect Wallet</ButtonTitle>
        </ConnectButton>
      ) : (
        <SwapTokensButton>Swap</SwapTokensButton>
      )}
    </>
  );
}
