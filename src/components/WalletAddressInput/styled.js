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
  padding: 13px 8px 13px 20px;
  border: 1px solid #302b44;
  border-radius: 100px;
  font-size: 16px;
  color: #fff;
`;
export { InputContainer, Label, Container };
