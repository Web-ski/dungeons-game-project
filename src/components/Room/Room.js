import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import RoomTile from "./RoomTile";

const Room = (props) => {
  const [room, setRoom] = useState();

  useEffect(() => {
    console.log(props.rooms);
    props.rooms !== undefined &&
      props.rooms.map((item) => {
        item.room.map((item) => {
          item.id === props.activeRoom && setRoom(item.field);
        });
      });
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

  const addChildren = (elems) => {
    return (
      elems !== undefined &&
      elems.map((item) => {
        return item.map((item) => <RoomTile data={item} />);
      })
    );
  };

  return <RoomBoard className="room">{addChildren(room)}</RoomBoard>;
};

const mapStateToProps = (state) => ({
  game1: console.log(state.roomsCollection),
  activeRoom: state.activeRoom,
  rooms: state.roomsCollection,
});

export default connect(mapStateToProps)(Room);
