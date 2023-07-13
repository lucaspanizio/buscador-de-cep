import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;

  @media (max-width: 479px) {
    font-size: 2rem;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;
  margin: 15px 0;
  border-radius: 8px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
`;

export const InputSearch = styled.input`
  background-color: transparent;
  border: 0;
  font-size: 1.5rem;
  color: #fff;
  outline: none;

  &::placeholder {
    color: #f1f1f1;
  }

  @media (max-width: 479px) {
    font-size: 1.3rem;
  }
`;

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
  }
`;
