import React, { useState, useEffect } from "react";
import styled from "styled-components";
const WALL = "/gameData/images/freepik-wall.jpg";
const FLOOR = "/gameData/images/freepik-floor.jpg";
const DOOR = "/gameData/images/freepik-door.png";

const RoomTile = ({ data }) => {
  console.log(data);
  const addImg = (name) => {
    switch (name) {
      case "wall":
        return `url('${WALL}')`;
      case "floor":
        return `url('${FLOOR}')`;
      case "door":
        return `url('${DOOR}')`;
      default:
        break;
    }
  };
  const Tile = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    background-color: transparent;
    background-image: ${addImg(data)};
    background-size: cover;
    background-repeat: no-repeat;
  `;

  return <Tile className="room"></Tile>;
};

export default RoomTile;
