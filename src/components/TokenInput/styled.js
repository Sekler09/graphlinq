import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  cursor: pointer;

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

const Input = styled.input`
  border: none;
  margin-right: 10px;
  min-width: 1ch;
  background: transparent;
  color: #fff;
  font-size: 16px;
  appearance: textfield;

  &::placeholder {
    color: #897fac;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  @media (width >= 3000px) {
    margin-right: 20px;
    font-size: 32px;
  }

  @media (width <= 768px) {
    font-size: 14px;
  }
`;

const DollarsAmount = styled.div`
  color: #897fac;

  @media (width >= 3000px) {
    font-size: 32px;
  }

  @media (width <= 768px) {
    font-size: 14px;
  }
`;

export { Container, DollarsAmount, Input, InputContainer, Label };
