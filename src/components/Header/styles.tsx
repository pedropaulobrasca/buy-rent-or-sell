import styled from 'styled-components';

export const SHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: relative;
  padding: 18px;
`;

export const SBuyRentSell = styled.h1`
  font-size: 42px;
  font-weight: 400;
  line-height: 52.15px;
  font-style: normal;
  cursor: pointer;
`;

// sign para o canto direito do header
export const SSignIn = styled.a`
  position: absolute;
  text-decoration: none;
  right: 0;
  margin-right: 18px;
  cursor: pointer;

  @media (max-width: 480px) {
    display: none;
  }
`;
