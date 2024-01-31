import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 16px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  color: #897fac;

  svg {
    fill: #897fac;
  }

  &:hover {
    color: #ffffff;
  }

  &:hover svg {
    fill: #ffffff;
  }

  &.active {
    border-radius: 100px;
    background: #302b44;

    svg {
      fill: #ffffff;
    }
    color: #ffffff;
  }
`;

export { StyledNavLink, Title };
