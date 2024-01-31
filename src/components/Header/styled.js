import styled from 'styled-components';

import { ReactComponent as Wallet } from 'assets/icons/wallet.svg';

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

const WalletIcon = styled(Wallet)`
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

export {
  StyledHeader,
  FlexContainer,
  Nav,
  ConnectButton,
  ButtonTitle,
  WalletIcon,
  Span,
};
