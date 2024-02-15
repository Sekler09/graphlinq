import styled from 'styled-components';

import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (width >= 3000px) {
    gap: 16px;
  }

  @media (width <= 1475px) {
    gap: 5px;
  }
`;

const SwapButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 13px 12px;
  width: 48px;
  height: 48px;
  background: #302b44;
  cursor: pointer;

  svg {
    transform: rotate(90deg);
  }

  & + div:last-child {
    margin-top: -28px;
  }

  @media (width >= 3000px) {
    width: 96px;
    height: 96px;

    svg {
      width: 40px;
      height: 40px;
    }

    & + div:last-child {
      margin-top: -56px;
    }
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
`;

const SwapTokensButton = styled.button`
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

  @media (width <= 768px) {
    margin-bottom: 0;
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

const SwapInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 24px;
  background: #302b4433;
  cursor: pointer;

  @media (width >= 3000px) {
    gap: 20px;
    padding: 40px;
    border-radius: 48px;
  }
`;

const MainInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (width >= 3000px) {
    gap: 20px;
  }
`;

const Token = styled.div`
  font-size: 16px;
  color: #fff;

  @media (width >= 3000px) {
    font-size: 32px;
  }

  @media (width <= 768px) {
    font-size: 14px;
  }
`;

const Equality = styled.div`
  font-size: 16px;
  color: #897fac;

  @media (width >= 3000px) {
    font-size: 32px;
  }

  @media (width <= 768px) {
    font-size: 14px;
  }
`;

const DollarsAmount = styled.div`
  font-size: 16px;
  color: #897fac;

  @media (width >= 3000px) {
    font-size: 32px;
  }

  @media (width <= 768px) {
    font-size: 14px;
  }
`;

const ArrowIcon = styled(Arrow)`
  margin-left: auto;
  width: 24px;
  height: 24px;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0.5)};
  transition: all 0.3s ease;

  @media (width >= 3000px) {
    width: 48px;
    height: 48px;
  }
`;

const Line = styled.hr`
  height: 1px;
  width: 100%;
  background: #302b44;

  @media (width >= 3000px) {
    height: 2px;
  }
`;

const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExtraInfoTitle = styled.div`
  font-size: 16px;
  color: #fff;

  @media (width >= 3000px) {
    font-size: 32px;
  }

  @media (width <= 768px) {
    font-size: 14px;
  }
`;

const ExtraInfoValue = styled.div`
  font-size: 16px;
  color: #897fac;

  @media (width >= 3000px) {
    font-size: 32px;
  }

  @media (width <= 768px) {
    font-size: 14px;
  }
`;

export {
  SwapButton,
  InputsContainer,
  ConnectButton,
  ButtonTitle,
  AvailableContainer,
  AvailableTitle,
  AvailableAmountContainer,
  AvailableAmount,
  AvailableAmountToken,
  SwapTokensButton,
  SwapInfoContainer,
  MainInfoContainer,
  Token,
  Equality,
  DollarsAmount,
  ArrowIcon,
  Line,
  ExtraInfoContainer,
  ExtraInfoTitle,
  ExtraInfoValue,
};
