import styled from 'styled-components';

const RateValue = styled.p`
  color: #897fac;
  font-size: 16px;
  line-height: 16px;
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
`;
export { Container, RateValue };
