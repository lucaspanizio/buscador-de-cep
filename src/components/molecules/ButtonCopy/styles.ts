import styled from 'styled-components'

export const Container = styled.button`
  position: absolute;
  display: flex;
  justify-content: right;
  right: 15px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`