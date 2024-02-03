import styled from 'styled-components';

import { ReactComponent as Info } from 'assets/icons/info.svg';

const BridgePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 160px auto;

  @media (min-width: 3000px) {
    gap: 48px;
    margin: 320px auto;
  }
`;

const BridgeContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  border-radius: 20px;
  background: rgba(12, 11, 15, 0.4);
  backdrop-filter: blur(50px);

  @media (min-width: 3000px) {
    padding: 80px;
    border-radius: 40px;
  }
`;

const BridgeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #ffffff;
  margin-bottom: 24px;

  @media (min-width: 3000px) {
    gap: 32px;
    margin-bottom: 48px;
  }
`;

const BridgeTitle = styled.h1`
  font-size: 48px;

  @media (min-width: 3000px) {
    font-size: 96px;
  }
`;

const BridgeSubtitle = styled.h2`
  font-size: 18px;

  @media (min-width: 3000px) {
    font-size: 36px;
  }
`;

const AvailableAmount = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 12px;

  @media (min-width: 3000px) {
    margin-bottom: 36px;
    gap: 24px;
  }
`;

const AvailableText = styled.div`
  color: #897fac;
  font-size: 16px;

  @media (min-width: 3000px) {
    font-size: 32px;
  }
`;

const AvailableValue = styled.div`
  color: #ffffff;
  font-size: 36px;

  @media (min-width: 3000px) {
    font-size: 72px;
  }
`;

const AvailableCurrency = styled.div`
  color: #897fac;
  font-size: 36px;

  @media (min-width: 3000px) {
    font-size: 72px;
  }
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

  @media (min-width: 3000px) {
    gap: 20px;
    padding: 24px 48px;
    margin-bottom: 48px;
    font-size: 32px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;

  @media (min-width: 3000px) {
    gap: 20px;
    font-size: 32px;
  }
`;

const InfoIcon = styled(Info)`
  fill: #897fac;

  @media (min-width: 3000px) {
    width: 48px;
  }
`;

const InfoText = styled.div`
  color: #897fac;
  margin-top: 3px;

  @media (min-width: 3000px) {
    margin-top: 6px;
  }
`;

const InfoTotal = styled.div`
  margin-top: 3px;
  color: #ffffff;

  @media (min-width: 3000px) {
    margin-top: 6px;
  }
`;

const DisclaimerText = styled.div`
  align-self: stretch;
  color: #897fac;
  text-align: center;
  font-size: 16px;
  opacity: 0.7;

  @media (min-width: 3000px) {
    font-size: 32px;
  }
`;

const SelectorsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;

  @media (min-width: 3000px) {
    gap: 16px;
    margin-bottom: 64px;
  }
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

  @media (min-width: 3000px) {
    gap: 16px;
    padding: 26px 24px;
    width: 96px;
    height: 96px;
  }
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

  @media (min-width: 3000px) {
    padding: 26px 24px;
    width: 96px;
    height: 96px;
    font-size: 32px;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  @media (min-width: 3000px) {
    gap: 16px;
    margin-bottom: 16px;
  }
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

  svg {
    width: 20px;
  }

  @media (min-width: 3000px) {
    gap: 16px;
    padding: 26px 40px;
    width: 536px;

    svg {
      width: 40px;
    }
  }
`;

const CurrencyInputValue = styled.div`
  flex: 1 0 0;
  font-size: 16px;
  color: #ffffff;

  @media (min-width: 3000px) {
    font-size: 32px;
  }
`;

const CurrencyInputName = styled.div`
  font-size: 16px;
  color: #897fac;

  @media (min-width: 3000px) {
    font-size: 32px;
  }
`;

const PickAmountButtonsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 32px;

  @media (min-width: 3000px) {
    gap: 8px;
    margin-bottom: 64px;
  }
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

  @media (min-width: 3000px) {
    height: 64px;
    padding: 4px 20px;
    font-size: 32px;
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
