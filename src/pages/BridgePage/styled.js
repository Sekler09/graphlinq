import styled from 'styled-components';

import { ReactComponent as Info } from 'assets/icons/info.svg';

const BridgePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 160px auto;
  width: 680px;
`;

const BridgeContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  border-radius: 20px;
  background: rgba(12, 11, 15, 0.4);
  backdrop-filter: blur(50px);
`;

const BridgeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #ffffff;
  margin-bottom: 24px;
`;

const BridgeTitle = styled.h1`
  font-size: 48px;
`;

const BridgeSubtitle = styled.h2`
  font-size: 18px;
`;

const AvailableAmount = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 12px;
`;

const AvailableText = styled.div`
  color: #897fac;
  font-size: 16px;
`;

const AvailableValue = styled.div`
  color: #ffffff;
  font-size: 36px;
`;

const AvailableCurrency = styled.div`
  color: #897fac;
  font-size: 36px;
`;

const ClaimButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 10px;
  border-radius: 100px;
  padding: 12px 24px;
  margin-bottom: 24px;
  background: linear-gradient(270deg, #9a23e6 -0.49%, #5519ee 99.51%);
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

const InfoIcon = styled(Info)`
  fill: #897fac;
`;

const InfoText = styled.div`
  color: #897fac;
  margin-top: 3px;
`;

const InfoTotal = styled.div`
  margin-top: 3px;
  color: #ffffff;
`;

const DisclaimerText = styled.div`
  align-self: stretch;
  color: #897fac;
  text-align: center;
  font-family: Gilroy-SemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.32px;
  opacity: 0.7;
`;

const SelectorsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
`;

const SwapButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 13px 12px;
  width: 48px;
  height: 48px;
  background: #302b44;
  cursor: pointer;
`;

const Equality = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 13px 12px;
  font-size: 16px;
  color: #897fac;
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const CurrencyInput = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 100px;
  border: 1px solid #302b44;
  padding: 13px 20px;
  cursor: pointer;
  width: 268px;
`;

const CurrencyInputValue = styled.div`
  flex: 1 0 0;
  font-size: 16px;
  color: #ffffff;
`;

const CurrencyInputName = styled.div`
  font-size: 16px;
  color: #897fac;
`;

const PickAmountButtonsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 32px;
`;

const PickAmountButton = styled.button`
  display: flex;
  height: 32px;
  padding: 2px 10px;
  align-items: center;
  border-radius: 100px;
  background: #302b44;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: #4e4962;
  }
`;

export {
  BridgeContainer,
  BridgeTitle,
  BridgeSubtitle,
  BridgePageContainer,
  BridgeText,
  AvailableAmount,
  AvailableText,
  AvailableValue,
  AvailableCurrency,
  ClaimButton,
  InfoContainer,
  InfoIcon,
  InfoText,
  InfoTotal,
  DisclaimerText,
  SelectorsContainer,
  SwapButton,
  Equality,
  CurrencyInput,
  CurrencyInputValue,
  CurrencyInputName,
  PickAmountButton,
  PickAmountButtonsContainer,
  InputsContainer,
};
