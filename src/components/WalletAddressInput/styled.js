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
  padding: 13px 8px 13px 20px;
  border: 1px solid #302b44;
  border-radius: 100px;
  font-size: 16px;
  color: #fff;

  @media (width >= 3000px) {
    padding: 0 40px;
    height: 96px;
    font-size: 32px;
  }

  @media (width <= 1475px) {
    padding: 19px 20px;
  }

  @media (width <= 768px) {
    font-size: 14px;
    padding: 18px 20px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    direction: rtl;
    text-align: left;
  }
`;
export { InputContainer, Label, Container };
