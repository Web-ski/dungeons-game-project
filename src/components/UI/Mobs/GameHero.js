import styled, { css } from "styled-components";

const GameHero = styled.div`
  position: absolute;
  background-color: blueviolet;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export default GameHero;
