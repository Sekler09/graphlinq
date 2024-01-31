import React from 'react';

import { StyledNavLink, Title } from './styled';

export default function NavigationLink({ to, icon, title }) {
  return (
    <StyledNavLink to={to}>
      {icon}
      <Title>{title}</Title>
    </StyledNavLink>
  );
}
