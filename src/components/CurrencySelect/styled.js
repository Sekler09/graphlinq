import styled from 'styled-components';

import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

const SelectContainer = styled.div`
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
    width: 20px;
    height: 20px;
  }

  @media (max-width: 1475px) {
    padding: 16.5px 20px;
    width: 308px;
  }

  @media (max-width: 768px) {
    padding: 18px 20px;
    width: 343px;
  }

  @media (min-width: 3000px) {
    gap: 16px;
    padding: 26px 40px;
    width: 536px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const Currency = styled.div`
  font-size: 16px;
  color: #ffffff;

  @media (min-width: 3000px) {
    font-size: 32px;
  }
`;

const CurrencyFullName = styled.div`
  flex: 1 0 0;
  font-size: 16px;
  color: #897fac;

  @media (min-width: 3000px) {
    font-size: 32px;
  }
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
  width: 100%;
  max-height: 130px;
  background: #0e0c11;
  box-shadow: 0px 4px 20px 0px #0e0c11;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 3000px) {
    top: calc(100% + 8px);
    max-height: 230px;
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

  @media (min-width: 3000px) {
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
};
