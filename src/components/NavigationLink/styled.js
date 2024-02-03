import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 16px;

  @media (min-width: 3000px) {
    font-size: 36px;
  }
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

  @media (min-width: 3000px) {
    gap: 24px;
    padding: 24px 40px;

    svg {
      width: 50px;
    }
  }
`;

export { StyledNavLink, Title };
