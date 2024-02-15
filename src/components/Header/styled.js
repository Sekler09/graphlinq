import styled from 'styled-components';

import { ReactComponent as ConnectWallet } from 'assets/icons/connect-wallet.svg';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as More } from 'assets/icons/more.svg';
import { ReactComponent as Wallet } from 'assets/icons/wallet.svg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px 24px;
  height: 80px;
  color: white;

  span:first-of-type::after,
  span:last-of-type::before {
    content: '';
    display: inline-block;
  }

  @media (width <= 768px) {
    padding: 16px;
  }

  @media (width >= 3000px) {
    padding: 32px 48px;
    height: 160px;
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 2;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: ${({ $gap }) => `${$gap}px`};
`;

const WalletInfoContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (width <= 768px) {
    gap: 4px;
  }

  @media (width >= 3000px) {
    gap: 32px;
  }
`;

const ButtonTitle = styled.div`
  color: #fff;
  font-size: 16px;

  @media (width <= 768px) {
    font-size: 14px;
  }

  @media (width >= 3000px) {
    font-size: 36px;
  }
`;

const ConnectWalletIcon = styled(ConnectWallet)`
  fill: #fff;

  @media (width <= 768px) {
    width: 20px;
  }

  @media (width >= 3000px) {
    width: 48px;
  }
`;

const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  height: 48px;
  gap: 10px;
  border-radius: 100px;
  padding: 0 24px;
  background: linear-gradient(270deg, #9a23e6 -0.49%, #5519ee 99.51%);
  cursor: pointer;

  @media (width <= 768px) {
    padding: 0 12px;
    height: 40px;
  }

  @media (width >= 3000px) {
    gap: 20px;
    padding: 0 48px;
    height: 96px;
  }
`;

const PlusIcon = styled(Plus)`
  fill: black;

  @media (width >= 3000px) {
    width: 64px;
  }
`;

const WalletContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  height: 48px;
  border: 1px solid #302b44;
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    border-color: #9a23e6;
    background: linear-gradient(270deg, #9a23e6 -0.49%, #5519ee 99.51%);
  }

  &:hover ${PlusIcon} {
    defs {
      display: none;
    }

    path {
      fill: #0e0c11;
    }
  }

  @media (width <= 768px) {
    padding: 0 12px;
    height: 40px;
  }

  @media (width >= 3000px) {
    gap: 20px;
    padding: 0 40px;
    height: 96px;
  }
`;

const WalletCurrencyContainer = styled.div`
  height: 20px;

  svg {
    width: 20px;
  }

  @media (width >= 3000px) {
    height: 40px;

    svg {
      width: 40px;
    }
  }
`;

const WalletValue = styled.div`
  color: #fff;
  font-size: 16px;

  @media (width <= 768px) {
    font-size: 14px;
  }

  @media (width >= 3000px) {
    font-size: 32px;
  }
`;

const WalletAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #4e4962;
  border-radius: 100px;
  height: 48px;
  padding: 0 20px;
  cursor: pointer;

  @media (width <= 768px) {
    padding: 0 12px;
    height: 40px;
  }

  @media (width >= 3000px) {
    gap: 20px;
    padding: 0 40px;
    height: 96px;
  }
`;

const WalletIcon = styled(Wallet)`
  width: 24px;

  @media (width <= 768px) {
    width: 20px;
  }

  @media (width >= 3000px) {
    width: 48px;
  }
`;

const Address = styled.div`
  color: #fff;
  font-size: 16px;

  @media (width <= 768px) {
    font-size: 14px;
  }

  @media (width >= 3000px) {
    font-size: 32px;
  }
`;

const MoreIcon = styled(More)`
  fill: #897fac;
  cursor: pointer;

  &:hover {
    fill: #fff;
  }

  @media (width <= 768px) {
    display: none;
  }

  @media (width >= 3000px) {
    width: 48px;
  }
`;

const NavContainer = styled.div`
  @media (width <= 1475px) {
    display: none;
  }
`;

const RatesContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (width <= 1475px) {
    display: none;
  }
`;

export {
  StyledHeader,
  FlexContainer,
  ConnectButton,
  ButtonTitle,
  ConnectWalletIcon,
  Span,
  WalletContainer,
  WalletValue,
  PlusIcon,
  WalletAddress,
  Address,
  MoreIcon,
  WalletCurrencyContainer,
  WalletIcon,
  WalletInfoContainer,
  NavContainer,
  RatesContainer,
};
