import styled from 'styled-components';

import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  position: relative;
`;

const Select = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 100px;
  border: 1px solid #302b44;
  padding: 13px 20px;
  cursor: pointer;
  width: 268px;

  svg {
    fill: #ffffff;
  }
`;

const Currency = styled.div`
  font-size: 16px;
  color: #ffffff;
`;

const CurrencyFullName = styled.div`
  flex: 1 0 0;
  font-size: 16px;
  color: #897fac;
`;

const ArrowIcon = styled(Arrow)`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0.5)};
  transition: all 0.3s ease;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid #302b44;
  padding: 4px 0px;
  width: 100%;
  height: 130px;
  background: #0e0c11;
  box-shadow: 0px 4px 20px 0px #0e0c11;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Option = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  border: 1px solid #302b44;
  padding: 8px 20px;
  cursor: pointer;

  &:hover {
    background: #1b1621;
  }
`;

export {
  SelectContainer,
  Select,
  Currency,
  CurrencyFullName,
  ArrowIcon,
  Option,
  OptionsContainer,
};
