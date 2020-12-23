import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Room = ({ collection }) => {
  const [roomId, setRoomId] = useState("001");
  const [room, setRoom] = useState([]);

  useEffect(() => {
    collection !== undefined && chooseRoom(collection);
  }, [collection]);

  const RoomBoard = styled.section`
    position: relative;
    width: 450px;
    height: 450px;
    margin: 0 auto;
    background-color: grey;
  `;

  const chooseRoom = (arr) => {
    arr.rooms.map((item) => {
      item.room.map((item) => {
        item.id === roomId && setRoom(item);
      });
    });
  };

  return <RoomBoard className="room">{console.log(room)}</RoomBoard>;
};

export default Room;
