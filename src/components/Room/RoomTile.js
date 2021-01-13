import React from "react";
import styled from "styled-components";
import { addPosY, addPosX } from "../../accessors/room"; //dodać plik i funkcję
const WALL = "/gameData/images/wall-green.png";
const WALL_CORNER = "/gameData/images/wall-green-corner.png";
const WALL_CORNER_RIGHT = "/gameData/images/wall-green-corner-right.png";
const WALL_CORNER_BOTTOM = "/gameData/images/wall-green-corner-bottom.png";
const WALL_CORNER_LEFT = "/gameData/images/wall-green-corner-left.png";
const WALL_DOWN = "/gameData/images/wall-green-bottom.png";
const WALL_LEFT = "/gameData/images/wall-green-left.png";
const WALL_RIGHT = "/gameData/images/wall-green-right.png";
const FLOOR = "/gameData/images/floor-green.png";
const DOOR = "/gameData/images/door-green-open.png";
const DOOR_RIGHT = "/gameData/images/door-green-open-right.png";
const DOOR_BOTTOM = "/gameData/images/door-green-open-bottom.png";
const DOOR_LEFT = "/gameData/images/door-green-open-left.png";

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
const addImg = (name, fieldId) => {
  switch (name) {
    case "wall":
      switch (fieldId) {
        case "73":
        case "74":
        case "75":
        case "76":
        case "77":
        case "78":
        case "79":
          return `url('${WALL_DOWN}')`;
        case "09":
        case "18":
        case "27":
        case "36":
        case "45":
        case "54":
        case "63":
          return `url('${WALL_LEFT}')`;
        case "17":
        case "26":
        case "35":
        case "44":
        case "53":
        case "62":
        case "71":
          return `url('${WALL_RIGHT}')`;
        case "00":
          return `url('${WALL_CORNER}')`;
        case "08":
          return `url('${WALL_CORNER_RIGHT}')`;
        case "80":
          return `url('${WALL_CORNER_BOTTOM}')`;
        case "72":
          return `url('${WALL_CORNER_LEFT}')`;
        default:
          return `url('${WALL}')`;
      }
    case "floor":
      return `url('${FLOOR}')`;
    case "door":
      switch (fieldId) {
        case "44":
          return `url('${DOOR_RIGHT}')`;
        case "76":
          return `url('${DOOR_BOTTOM}')`;
        case "36":
          return `url('${DOOR_LEFT}')`;
        default:
          return `url('${DOOR}')`;
      }
    default:
      break;
  }
};

const RoomTile = ({ kind, fieldId }) => {
  return (
    <Tile
      className="room"
      kind={fieldId !== undefined && addImg(kind, fieldId)}
      top={addPosY(fieldId) + "px"}
      left={addPosX(fieldId) + "px"}
    ></Tile>
  );
};

export default RoomTile;
