import { ReactComponent as SwapIcon } from 'assets/icons/swap.svg';
import { ReactComponent as GLQIcon } from 'assets/icons/glq-icon.svg';
import { ReactComponent as ETHIcon } from 'assets/icons/eth-icon.svg';

import CurrencySelect from 'components/CurrencySelect';
import {
  AvailableAmount,
  AvailableCurrency,
  AvailableText,
  AvailableValue,
  BridgeContainer,
  BridgePageContainer,
  BridgeSubtitle,
  BridgeText,
  BridgeTitle,
  ClaimButton,
  CurrencyInput,
  CurrencyInputName,
  CurrencyInputValue,
  DisclaimerText,
  Equality,
  InfoContainer,
  InfoIcon,
  InfoText,
  InfoTotal,
  InputsContainer,
  PickAmountButton,
  PickAmountButtonsContainer,
  SelectorsContainer,
  SwapButton,
} from './styled';

export default function BridgePage() {
  return (
    <BridgePageContainer>
      <BridgeContainer>
        <BridgeText>
          <BridgeTitle>Bridge</BridgeTitle>
          <BridgeSubtitle>
            Transfer assets between Ethereum and Graphlinq Chain
          </BridgeSubtitle>
        </BridgeText>
        <SelectorsContainer>
          <CurrencySelect />
          <SwapButton>
            <SwapIcon />
          </SwapButton>
          <CurrencySelect />
        </SelectorsContainer>
        <AvailableText>Available</AvailableText>
        <AvailableAmount>
          <AvailableValue>334.02</AvailableValue>
          <AvailableCurrency>GLQ</AvailableCurrency>
        </AvailableAmount>
        <InputsContainer>
          <CurrencyInput>
            <GLQIcon />
            <CurrencyInputValue>130</CurrencyInputValue>
            <CurrencyInputName>GLQ</CurrencyInputName>
          </CurrencyInput>
          <Equality>=</Equality>
          <CurrencyInput>
            <ETHIcon />
            <CurrencyInputValue>0.00345</CurrencyInputValue>
            <CurrencyInputName>ETH</CurrencyInputName>
          </CurrencyInput>
        </InputsContainer>
        <PickAmountButtonsContainer>
          <PickAmountButton>25%</PickAmountButton>
          <PickAmountButton>50%</PickAmountButton>
          <PickAmountButton>MAX</PickAmountButton>
        </PickAmountButtonsContainer>
        <ClaimButton>Claim</ClaimButton>
        <InfoContainer>
          <InfoIcon />
          <InfoText>Total already claimed:</InfoText>
          <InfoTotal>28 GLQ</InfoTotal>
        </InfoContainer>
      </BridgeContainer>
      <DisclaimerText>
        Your claim amount available could be taking delays (max ~72h) <br />
        Please wait & ome back later if you don&apos;t see them!
      </DisclaimerText>
    </BridgePageContainer>
  );
}
