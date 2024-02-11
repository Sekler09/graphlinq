import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Label = styled.div`
  font-size: 16px;
  color: #fff;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 20px;
  border: 1px solid #302b44;
  border-radius: 100px;
`;

const AmountContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 16px;
  margin-right: auto;
`;

const TokensAmount = styled.div`
  color: #fff;
`;

const DollarsAmount = styled.div`
  color: #897fac;
`;

export {
  InputContainer,
  Label,
  Container,
  AmountContainer,
  TokensAmount,
  DollarsAmount,
};
