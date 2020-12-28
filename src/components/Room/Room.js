import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import RoomTile from "./RoomTile";
import GameHero from "../UI/Mobs/GameHero";
import { isBrowser } from '../../accessors/player';

const Room = (props) => {
  const [room, setRoom] = useState();
  const [posX, setPosX] = useState();
  const [posY, setPosY] = useState();

  
  useEffect(() => {
    props.rooms !== undefined &&
    props.rooms.map((item) => {
      item.room.map((item) => {
        item.id === props.activeRoom && setRoom(item.field);
      });
    });
  }, [props.rooms]);
  
  useEffect(() => {
    props.hero !== undefined && setPosX(props.hero[0].positionX);
    props.hero !== undefined && setPosY(props.hero[0].positionY);
  }, [props.hero]);
  
  //oneKeyDown use with Hook
  useEffect(() => {
    isBrowser() && window.addEventListener('keydown', (event) => {
      console.log(event.keyCode)
    });
  });

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

  return (
    <RoomBoard className="room">
      {addChildren(room)}
      <GameHero top={posX + "px"} left={posY + "px"} />
    </RoomBoard>
  );
};

const mapStateToProps = (state) => ({
  game1: console.log(state.game.hero),
  activeRoom: state.game.activeRoom,
  rooms: state.game.roomsCollection,
  hero: state.game.hero,
  //heroX: state.hero.positionX,
});

export default connect(mapStateToProps)(Room);
