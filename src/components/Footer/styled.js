import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: none;

  @media (width <= 1475px) {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 30px 0;
  }

  @media (width <= 768px) {
    position: fixed;
    bottom: 0;
    background: #0c0b0f;
    padding: 16px 16px 24px;
  }
`;

export { StyledFooter };
