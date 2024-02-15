import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TokensLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 20px;
  padding: 40px;
  margin: 160px auto;
  width: 680px;
  background: #0c0b0f66;

  @media (width >= 3000px) {
    gap: 48px;
    border-radius: 40px;
    padding: 80px;
    margin: 320px auto;
    width: 1360px;
  }

  @media (width <= 1475px) {
    background: none;
    margin: 80px auto;
    width: 768px;
  }

  @media (width <= 768px) {
    margin: 40px auto;
    width: 375px;
    gap: 16px;
    padding: 0 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 24px;

  @media (width >= 3000px) {
    gap: 48px;
  }

  @media (width <= 768px) {
    gap: 16px;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 48px;
  color: #897fac;

  &.active {
    color: #fff;
  }

  @media (width >= 3000px) {
    font-size: 96px;
  }

  @media (width <= 1475px) {
    font-size: 32px;
  }
`;

export { TokensLayoutContainer, Nav, StyledLink };
