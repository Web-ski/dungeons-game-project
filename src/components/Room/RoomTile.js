import React from "react";
import styled from "styled-components";
const WALL = "/gameData/images/freepik-wall.jpg";
const FLOOR = "/gameData/images/freepik-floor.jpg";
const DOOR = "/gameData/images/freepik-door.png";

const Tile = styled.div`
position: relative;
width: 50px;
height: 50px;
margin: 0 auto;
background-color: transparent;
background-image: ${({data}) => data};
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

const RoomTile = ({ data }) => {
  //console.log(data);

  return <Tile className="room" data={addImg(data)}></Tile>;
};

export default RoomTile;
