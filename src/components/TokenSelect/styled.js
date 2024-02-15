import styled from 'styled-components';

import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

const SelectContainer = styled.div`
  position: relative;
`;

const Select = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 100px;
  padding: 3px 4px 3px 10px;
  border: 1px solid;
  border-color: ${({ $isOpen }) => ($isOpen ? '#9a23e6' : '#302b44')};
  background: ${({ $isOpen }) => ($isOpen ? 'transparent' : '#302b44')};
  cursor: pointer;

  @media (width >= 3000px) {
    padding: 6px 8px 6px 20px;
    gap: 20px;
  }

  @media (width <= 1475px) {
    padding: 8px 4px 8px 10px;
  }
`;

const NotSelect = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 100px;
  padding: 4px 4px 4px 10px;
  background: linear-gradient(270deg, #9a23e6 -0.49%, #5519ee 99.51%);
  cursor: pointer;

  svg {
    opacity: 1;
  }

  @media (width >= 3000px) {
    padding: 8px 8px 8px 20px;
  }

  @media (width <= 1475px) {
    padding: 8px 4px 8px 10px;
  }
`;

const IconContainer = styled.div`
  display: flex;

  svg {
    fill: #fff;
    width: 20px;
    height: 20px;
  }

  @media (width >= 3000px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const Currency = styled.div`
  font-size: 16px;
  color: #fff;

  @media (width >= 3000px) {
    font-size: 32px;
  }

  @media (width <= 768px) {
    font-size: 14px;
  }
`;

const CurrencyFullName = styled.div`
  flex: 1 0 0;
  font-size: 16px;
  color: #897fac;

  @media (width >= 3000px) {
    font-size: 32px;
  }
`;

const ArrowIcon = styled(Arrow)`
  width: 24px;
  height: 24px;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0.5)};
  transition: all 0.3s ease;

  @media (width >= 3000px) {
    width: 48px;
    height: 48px;
  }
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid #302b44;
  width: 268px;
  max-height: 120px;
  background: #0e0c11;
  box-shadow: 0 4px 20px 0 #0e0c11;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (width >= 3000px) {
    top: calc(100% + 8px);
    max-height: 230px;
    width: 536px;
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

  svg {
    width: 20px;
    height: 20px;
  }

  @media (width >= 3000px) {
    gap: 16px;
    padding: 16px 40px;

    svg {
      width: 40px;
      height: 40px;
    }
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
  IconContainer,
  NotSelect,
};
