import styled from 'styled-components';

import { ReactComponent as logo } from 'assets/icons/logo.svg';
import { ReactComponent as name } from 'assets/icons/logo-name.svg';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
`;

const LogoIcon = styled(logo)`
  max-width: none;

  @media (width <= 768px) {
    width: 21px;
  }

  @media (width >= 3000px) {
    width: 75px;
  }
`;

const LogoName = styled(name)`
  @media (width <= 768px) {
    display: none;
  }

  @media (width >= 3000px) {
    width: 250px;
  }
`;

export { LogoIcon, LogoName, LogoContainer };
