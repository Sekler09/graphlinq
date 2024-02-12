import styled from 'styled-components';

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
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
`;

const ButtonTitle = styled.div`
  color: #fff;
  font-size: 16px;
`;

const AvailableContainer = styled.div`
  margin-bottom: 8px;
  color: #897fac;
`;

const AvailableTitle = styled.div`
  font-size: 16px;
`;

const AvailableAmountContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const AvailableAmount = styled.div`
  font-size: 36px;
  color: #fff;
`;

const AvailableAmountToken = styled.div`
  font-size: 36px;
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
