import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import RoomTile from "./RoomTile";

const Room = (props) => {
  const [roomId, setRoomId] = useState("001");
  const [room, setRoom] = useState();
  console.log(props.game);

  useEffect(() => {
    props.activeRoom !== undefined && setRoomId(props.activeRoom);
  }, [props.activeRoom]);

  useEffect(() => {
    props.rooms !== undefined && chooseRoom(props.rooms);
  }, [props.rooms]);

  const RoomBoard = styled.section`
    position: relative;
    width: 450px;
    height: 450px;
    margin: 0 auto;
    background-color: #111111;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  const chooseRoom = (elems) => {
    console.log(elems);
    // setRoomId(elems.startRoomId);
    elems.map((item) => {
      item.room.map((item) => {
        item.id === roomId && setRoom(item);
      });
    });
  };

  const addTiles = (elem) => {
    return elem.map((item) => {
      //console.log(item);

      return item.map((item, index) => {
        //console.log(item);
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

const mapStateToProps = (state) => ({
  game1: console.log(state.roomsCollection),
  rooms: state.roomsCollection,
  activeRoom: state.activeRoom,
});

export default connect(mapStateToProps)(Room);
