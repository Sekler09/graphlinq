import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;

  a:last-child {
    display: none;
  }

  @media (max-width: 768px) {
    width: 360px;
    justify-content: space-between;

    a:last-child {
      display: flex;
    }
  }
`;

export { NavContainer };
