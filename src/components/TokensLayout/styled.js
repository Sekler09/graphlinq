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
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 24px;
`;

const StyledLink = styled(NavLink)`
  font-size: 48px;
  color: #897fac;

  &.active {
    color: #ffffff;
  }
`;

export { TokensLayoutContainer, Nav, StyledLink };
