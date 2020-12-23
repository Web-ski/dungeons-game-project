import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RoomTile from "./RoomTile";

const Room = ({ collection }) => {
  const [roomId, setRoomId] = useState("001");
  const [room, setRoom] = useState();

  useEffect(() => {
    collection !== undefined && chooseRoom(collection);
  }, [collection]);

  const RoomBoard = styled.section`
    position: relative;
    width: 450px;
    height: 450px;
    margin: 0 auto;
    background-color: grey;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  const chooseRoom = (arr) => {
    arr.rooms.map((item) => {
      item.room.map((item) => {
        item.id === roomId && setRoom(item);
      });
    });
  };

  const addTiles = (elem) => {
    return elem.map((item) => {
      console.log(item);

      return item.map((item, index) => {
        console.log(item);
        return <RoomTile data={item} />;
      });
    });
  };

  return (
    <RoomBoard className="room">
      {room !== undefined && addTiles(room.field)}
    </RoomBoard>
  );
};

export default Room;
