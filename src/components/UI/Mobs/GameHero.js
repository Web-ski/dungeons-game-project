import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import {
  isBrowser,
  playerMove,
  playerBackground,
} from "../../../accessors/player";
import { changePositionAction } from "../../../api/player/action";
import { switchRoomAction } from "../../../api/game/action";
import { removeCoinsAction } from "../../../api/treasures/action";
import HeroElem from "./HeroElem";

const GameHero = (props) => {
  const [posX, setPosX] = useState();
  const [posY, setPosY] = useState();
  const [activeRoom, setActiveRoom] = useState();

  useEffect(() => {
    props.positionX !== undefined && setPosX(props.positionX);
    props.positionY !== undefined && setPosY(props.positionY);
    props.room !== undefined &&
      props.roomsCollection.map(
        (item) => item.room[0].id === props.room && setActiveRoom(item.room[0])
      );
  }, [props.positionX, props.positionY, props.room, props.roomsCollection]);

  //oneKeyDown use with Hook
  const heroMove = useCallback(
    (event) => {
      let m = playerMove(event.keyCode);
      //console.log(posX, posY);
      let x = parseInt(posX);
      let y = parseInt(posY);
      x = x + m.x;
      y = y + m.y;
      //console.log(activeRoom);
      //checking room-background
      let checkingObj = playerBackground(x, y, activeRoom.field[0]);
      //console.log(checkingObj.floor);
      if (checkingObj) {
        if (Object.keys(checkingObj).toString() === "floor") {
          props.move(x, y);
        }
        if (Object.keys(checkingObj).toString() === "door") {
          let newRoom;
          if (checkingObj.door === "44") {
            x = 50;
            y = 200;
            newRoom = (parseInt(props.room) + 1).toString();
          }
          if (checkingObj.door === "36") {
            x = 350;
            y = 200;
            newRoom = (parseInt(props.room) - 1).toString();
          }
          if (checkingObj.door === "76") {
            x = 200;
            y = 50;
            newRoom = (parseInt(props.room) + 10).toString();
          }
          if (checkingObj.door === "04") {
            x = 200;
            y = 350;
            newRoom = (parseInt(props.room) - 10).toString();
          }
          //console.log(checkingObj);
          newRoom.length < 2 && (newRoom = 0 + newRoom);
          newRoom.length < 3 && (newRoom = 0 + newRoom);
          props.switchRoom(newRoom);
          props.move(x, y);
        }
      }
      //Checking treasure
      if (checkingObj) {
        if (checkingObj.floor !== undefined) {
          props.coins.map((item) => {
            if (activeRoom.id === item.coinRoom) {
              checkingObj.floor === item.field &&
                //props.removeCoins(item.coinId);
                console.log("I've got Money!");
            }
          });

          //console.log(checkingObj.floor, activeRoom);
        }
      }
    },
    [props, posX, posY]
  );

  useEffect(() => {
    isBrowser() && window.addEventListener("keydown", heroMove);
    return () => {
      window.removeEventListener("keydown", heroMove);
    };
  }, [heroMove]);

  return <HeroElem top={posY + "px"} left={posX + "px"} />;
};

const mapStateToProps = (state) => ({
  hero: state.player.hero,
  positionX: state.player.positionX,
  positionY: state.player.positionY,
  room: state.game.activeRoom,
  roomsCollection: state.game.roomsCollection,
  coins: state.treasures.coins,
  //heroX: state.hero.positionX,
});

const mapDispatchToProps = (dispatch) => {
  return {
    move: (dataX, dataY) => dispatch(changePositionAction(dataX, dataY)),
    switchRoom: (data) => dispatch(switchRoomAction(data)),
    removeCoins: (id) => dispatch(removeCoinsAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameHero);
