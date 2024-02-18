import { useDispatch, useSelector } from 'react-redux';

import TokenInput from 'components/TokenInput';
import WalletAddressInput from 'components/WalletAddressInput';
import { connectWallet } from 'store/slices/walletSlice';

import { ReactComponent as WalletIcon } from 'assets/icons/connect-wallet.svg';

import {
  AvailableAmount,
  AvailableAmountContainer,
  AvailableAmountToken,
  AvailableContainer,
  AvailableTitle,
  ButtonTitle,
  ConnectButton,
  InputsContainer,
  SendTokensButton,
} from './styled';

export default function SendTokensPage() {
  const isWalletConnected = useSelector(state => state.wallet.isConnected);
  const dispatch = useDispatch();

  return (
    <>
      {isWalletConnected && (
        <AvailableContainer>
          <AvailableTitle>Available</AvailableTitle>
          <AvailableAmountContainer>
            <AvailableAmount>334.02</AvailableAmount>
            <AvailableAmountToken>GLQ</AvailableAmountToken>
          </AvailableAmountContainer>
        </AvailableContainer>
      )}
      <InputsContainer>
        <TokenInput label="You’re sending" selected />
        <WalletAddressInput label="To address" />
      </InputsContainer>
      {!isWalletConnected ? (
        <ConnectButton onClick={() => dispatch(connectWallet())}>
          <WalletIcon />
          <ButtonTitle>Connect Wallet</ButtonTitle>
        </ConnectButton>
      ) : (
        <SendTokensButton>Send</SendTokensButton>
      )}
    </>
  );
}
