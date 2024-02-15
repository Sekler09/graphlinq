import styled from 'styled-components';

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (width >= 3000px) {
    gap: 64px;
  }

  @media (width <= 768px) {
    gap: 16px;
  }
`;

const ConnectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid #9a23e6;
  padding: 14px 24px 12px;
  background: transparent;
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
    fill: #fff;
  }

  @media (width >= 3000px) {
    height: 96px;
    gap: 20px;

    svg {
      height: 40px;
      width: 40px;
    }
  }

  @media (width <= 1475px) {
    padding: 19px 0 17px;
  }

  @media (width <= 768px) {
    padding: 15px 0 13px;
  }
`;

const SendTokensButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 14px 24px 12px;
  background: linear-gradient(270deg, #9a23e6 -0.49%, #5519ee 99.51%);
  font-size: 16px;
  color: #fff;
  cursor: pointer;

  @media (width >= 3000px) {
    height: 100px;
    font-size: 32px;
  }

  @media (width <= 1475px) {
    padding: 18px 0 16px;
  }
`;

const ButtonTitle = styled.div`
  color: #fff;
  font-size: 16px;

  @media (width >= 3000px) {
    font-size: 32px;
  }
`;

const AvailableContainer = styled.div`
  margin-bottom: 8px;
  color: #897fac;

  @media (width >= 3000px) {
    margin-bottom: 16px;
  }
`;

const AvailableTitle = styled.div`
  font-size: 16px;

  @media (width >= 3000px) {
    font-size: 32px;
  }

  @media (width <= 768px) {
    font-size: 14px;
  }
`;

const AvailableAmountContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (width >= 3000px) {
    gap: 24px;
  }
`;

const AvailableAmount = styled.div`
  font-size: 36px;
  color: #fff;

  @media (width >= 3000px) {
    font-size: 72px;
  }

  @media (width <= 768px) {
    font-size: 24px;
  }
`;

const AvailableAmountToken = styled.div`
  font-size: 36px;

  @media (width >= 3000px) {
    font-size: 72px;
  }

  @media (width <= 768px) {
    font-size: 24px;
  }
`;

export {
  InputsContainer,
  ConnectButton,
  ButtonTitle,
  AvailableContainer,
  AvailableTitle,
  AvailableAmountContainer,
  AvailableAmount,
  AvailableAmountToken,
  SendTokensButton,
};
