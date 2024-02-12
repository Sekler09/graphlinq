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
        <TokenInput
          label="You’re sending"
          tokensAmount={isWalletConnected ? 2 : 0}
          selected
        />
        <WalletAddressInput
          label="To address"
          value={
            isWalletConnected
              ? '0x8aBC86026492061C60B35E81Ccf23F408977895C'
              : 'Wallet address or ENS name'
          }
        />
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
