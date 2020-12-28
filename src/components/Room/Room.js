import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changePositionAction } from "../../api/player/action";
import styled from "styled-components";
import RoomTile from "./RoomTile";
import GameHero from "../UI/Mobs/GameHero";
import { isBrowser, playerMove } from '../../accessors/player';

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
    props.positionX !== undefined && setPosX(props.positionX);
    props.positionY !== undefined && setPosY(props.positionY);
  }, [props.positionX, props.positionY]);

  //oneKeyDown use with Hook
  useEffect(() => {
    isBrowser() && window.addEventListener('keydown', (event) => {
      //console.log(event.keyCode);
      //playerMove(event.keyCode);
      props.move("100", "100");
      console.log(props.positionX, props.positionY);
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
  activeRoom: state.game.activeRoom,
  rooms: state.game.roomsCollection,
  hero: state.player.hero,
  positionX: state.player.positionX,
  positionY: state.player.positionY,
  game1: state.game.hero !== undefined && state.game.hero[0].positionX,
  //heroX: state.hero.positionX,
});

const mapDispatchToProps = (dispatch) => {
  return {
    move: (dataX, dataY) => dispatch(changePositionAction(dataX, dataY)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
