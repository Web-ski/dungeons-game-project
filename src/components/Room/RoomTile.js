import React from "react";
import styled from "styled-components";
import { addPosY, addPosX } from "../../accessors/room"; //dodać plik i funkcję
const WALL = "/gameData/images/freepik-wall.jpg";
const FLOOR = "/gameData/images/freepik-floor.jpg";
const DOOR = "/gameData/images/freepik-door.png";

const Tile = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: 50px;
  height: 50px;
  margin: 0;
  background-color: transparent;
  background-image: ${({ kind }) => kind};
  background-size: cover;
  background-repeat: no-repeat;
`;
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

const RoomTile = ({ kind, fieldId }) => {
  //console.log(fieldId);

  return (
    <Tile
      className="room"
      kind={addImg(kind)}
      top={addPosY(fieldId) + "px"}
      left={addPosX(fieldId) + "px"}
    ></Tile>
  );
};

export default RoomTile;
