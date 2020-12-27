import styled, { css } from "styled-components";
// const HERO = "/gameData/images/gnome.svg";
const HERO = "/gameData/images/chemist-svgrepo-com.svg";

const GameHero = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  background-color: transparent;
  background-image: ${`url('${HERO}')`};
  background-size: cover;
  background-repeat: no-repeat;
`;

export default GameHero;
