import React from "react";
import styled from "styled-components";

const COIN = "/gameData/images/coin-green.png";

const CoinElem = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: ${({ top }) => top || "200px"};
  left: ${({ left }) => left || "200px"};
  background-color: transparent;
  background-image: ${`url('${COIN}')`};
  background-size: cover;
  background-repeat: no-repeat;
  animation: coinAnim 0.6s alternate infinite;

  @keyframes coinAnim {
    from {
      transform: translateY(5%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const Coin = () => {
  return <CoinElem />;
};

export default Coin;
