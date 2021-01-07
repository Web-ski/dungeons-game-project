import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import RoomTile from "./RoomTile";
import GameHero from "../UI/Mobs/GameHero";
import Coin from "../UI/Treasures/Coin";

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
  const [coins, setCoins] = useState();

  useEffect(() => {
    props.rooms !== undefined &&
      props.rooms.map((item) => {
        return item.room.map((item) => {
          return item.id === props.activeRoom && setRoom(item.field);
        });
      });
  }, [props.rooms, props.activeRoom]);

  useEffect(() => {
    let active = props.activeRoom;
    let coin;
    props.treasures !== undefined &&
      props.treasures[0].coins.map((item) => {
        item.coinRoom === active && (coin = [item.coinId, item.field]);
      });
    setCoins(coin);
    console.log(coins);
  }, [props.treasures, props.activeRoom]);

  const addRoomElems = (elems, name) => {
    if (elems !== undefined) {
      return elems.map((item, index) => (
        <RoomTile key={index + item.toString()} kind={name} fieldId={item} />
      ));
    }
    // return item.map((item, index) => <RoomTile key={index + item.toString()} data={item} />);
  };
  const addCoins = (elem) => {
    return <Coin key={"coin" + elem[0]} fieldId={elem[1]} />;
  };

  return (
    <RoomBoard className="room">
      {room !== undefined && addRoomElems(room[0].wall, "wall")}
      {room !== undefined && addRoomElems(room[0].floor, "floor")}
      {room !== undefined && addRoomElems(room[0].door, "door")}
      <GameHero />
      {coins !== undefined && addCoins(coins)}
    </RoomBoard>
  );
};

const mapStateToProps = (state) => ({
  activeRoom: state.game.activeRoom,
  rooms: state.game.roomsCollection,
  hero: state.player.hero,
  treasures: state.treasures.treasures,
});

export default connect(mapStateToProps)(Room);
