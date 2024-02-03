import styled from 'styled-components';

const RateValue = styled.p`
  color: #897fac;
  font-size: 16px;
  line-height: 16px;

  @media (min-width: 3000px) {
    font-size: 36px;
    line-height: 36px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  svg {
    fill: #897fac;
  }

  &:hover ${RateValue} {
    color: #ffffff;
  }

  &:hover svg {
    fill: #ffffff;
  }

  @media (min-width: 3000px) {
    gap: 16px;

    svg {
      width: 50px;
    }
  }
`;
export { Container, RateValue };
