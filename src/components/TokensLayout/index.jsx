import { Outlet } from 'react-router-dom';

import { Nav, StyledLink, TokensLayoutContainer } from './styled';

export default function TokensLayout() {
  return (
    <TokensLayoutContainer>
      <Nav>
        <StyledLink to="/tokens/swap">Swap</StyledLink>
        <StyledLink to="/tokens/buy">Buy</StyledLink>
        <StyledLink to="/tokens/send">Send</StyledLink>
      </Nav>
      <Outlet />
    </TokensLayoutContainer>
  );
}
