import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import RoomTile from "./RoomTile";
import GameHero from "../UI/Mobs/GameHero";

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

const Room = (props) => {
  const [room, setRoom] = useState();

  useEffect(() => {
    props.rooms !== undefined &&
      props.rooms.map((item) => {
        return item.room.map((item) => {
          return item.id === props.activeRoom && setRoom(item.field);
        });
      });
  }, [props.rooms, props.activeRoom]);

  const addRoomElems = (elems, name) => {
    if (elems !== undefined) {
      return elems.map((item, index) => (
        // console.log(item)
        <RoomTile key={index + item.toString()} kind={name} fieldId={item} />
      ));
    }
    // return item.map((item, index) => <RoomTile key={index + item.toString()} data={item} />);
  };

  return (
    <RoomBoard className="room">
      {room !== undefined && addRoomElems(room[0].wall, "wall")}
      {room !== undefined && addRoomElems(room[0].floor, "floor")}
      {room !== undefined && addRoomElems(room[0].door, "door")}
      <GameHero />
    </RoomBoard>
  );
};

const mapStateToProps = (state) => ({
  activeRoom: state.game.activeRoom,
  rooms: state.game.roomsCollection,
  hero: state.player.hero,
});

export default connect(mapStateToProps)(Room);
