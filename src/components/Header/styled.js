import styled from 'styled-components';

import { ReactComponent as ConnectWallet } from 'assets/icons/connect-wallet.svg';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as More } from 'assets/icons/more.svg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px 24px;
  height: 80px;
  font-size: large;
  color: white;

  span:first-of-type:after,
  span:last-of-type:before {
    content: '';
    display: inline-block;
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

const Nav = styled.nav`
  display: flex;
`;

const ButtonTitle = styled.div`
  color: #ffffff;
  font-size: 16px;
`;

const ConnectWalletIcon = styled(ConnectWallet)`
  fill: #ffffff;
`;

const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  padding: 12px 24px;
  background: linear-gradient(270deg, #9a23e6 -0.49%, #5519ee 99.51%);
  cursor: pointer;
`;

const PlusIcon = styled(Plus)`
  fill: black;
`;

const WalletContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid #302b44;
  padding: 12px 8px 12px 20px;
  height: 48px;
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
`;

const WalletValue = styled.div`
  color: #ffffff;
  font-size: 16px;
`;

const WalletAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #4e4962;
  border-radius: 100px;
  padding: 11px 20px;
  cursor: pointer;
`;

const Address = styled.div`
  color: #ffffff;
  font-size: 16px;
`;

const MoreIcon = styled(More)`
  fill: #897fac;
  cursor: pointer;
  &:hover {
    fill: #ffffff;
  }
`;

export {
  StyledHeader,
  FlexContainer,
  Nav,
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
};
