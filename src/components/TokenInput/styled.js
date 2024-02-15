import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (width >= 3000px) {
    gap: 16px;
  }
`;

const Label = styled.div`
  font-size: 16px;
  color: #fff;

  @media (width >= 3000px) {
    font-size: 32px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 20px;
  border: 1px solid #302b44;
  border-radius: 100px;

  @media (width >= 3000px) {
    padding: 16px 16px 16px 40px;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 16px;
  margin-right: auto;

  @media (width >= 3000px) {
    gap: 20px;
    font-size: 32px;
  }

  @media (width <= 768px) {
    font-size: 14px;
  }
`;

const TokensAmount = styled.div`
  color: #fff;

  @media (width >= 3000px) {
    font-size: 32px;
  }
`;

const DollarsAmount = styled.div`
  color: #897fac;

  @media (width >= 3000px) {
    font-size: 32px;
  }
`;

export {
  InputContainer,
  Label,
  Container,
  AmountContainer,
  TokensAmount,
  DollarsAmount,
};
