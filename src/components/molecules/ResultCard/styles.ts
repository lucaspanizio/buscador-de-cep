import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-word;
  align-items: start;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  max-width: 800px;

  @media screen and (max-width: 479px) {
    width: 310px;
  }
`;
