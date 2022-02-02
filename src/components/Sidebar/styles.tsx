import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

interface ButtonProps {
  open: boolean;
}

export const Container = styled.div`
  position: fixed;

  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 614px;
  max-width: 614px;

  height: calc(100vh - 120px);

  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  position: absolute;

  left: 0;
  top: 100px;
  margin-left: 20px;
  padding: 20px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }
`;

export const SearchGroup = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    font-size: 14px;
    color: #999;
    margin-top: 8px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
`;

export const Input = styled.div`
  display: flex;

  position: relative;

  width: 100%;
  height: 55px;

  border: 1px solid #ddd;
  border-radius: 4px;

  font-size: 16px;
  color: #999;

  & > input {
    position: relative;

    width: 100%;
    height: 100%;

    border: 0;
    padding: 0 20px;

    font-size: 16px;
    color: #999;

    &::placeholder {
      color: #999;
    }
  }

  & > svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #999;

    transition: color 0.4s;

    &:hover {
      color: #3d3d3d;
    }
  }
`;

// Botão redondo com icone de abrir o menu
export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border: 0;
  border-radius: 50%;
  background: #ffffff;

  position: absolute;

  // Posição do botão ao lado do menu
  left: ${(props: any) => (props.open ? '20px' : '654px')};

  transition: background 0.4s;

  cursor: pointer;

  &:hover {
    background: #666;
    color: #fff;
  }
`;

export const ImovelCards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  width: 100%;
  height: 100%;

  & > div {
    width: 100%;
    height: 100%;
  }
`;
