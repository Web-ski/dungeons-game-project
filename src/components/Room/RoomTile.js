import React, { useState, useEffect } from "react";
import styled from "styled-components";
const WALL = "/gameData/images/stones-multicolors.svg";
const FLOOR = "/gameData/images/floor.svg";

const RoomTile = ({ data }) => {
  const addImg = (name) => {
    switch (name) {
      case "wall":
        return `url('${WALL}')`;
        break;
      case "floor":
        return `url('${FLOOR}')`;
        break;
      default:
        break;
    }
  };
  const Tile = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    background-color: #c4c4c4;
    background-image: ${addImg(data)};
    background-size: contain;
  `;

  return <Tile className="room"></Tile>;
};

export default RoomTile;
