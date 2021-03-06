import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addGameAction } from "../../api/game/action";
import { addHeroAction } from "../../api/player/action";
import { addTreasuresAction } from "../../api/treasures/action";
import GameHeader from "../../components/Header/GameHeader";
import RoomHeader from "../../components/Header/RoomHeader";
import Room from "../../components/Room/Room";
import styled from "styled-components";
const URL = "/gameData/gameboard.json";

const Section = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Game = (props) => {
  //const [rooms, setRooms] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => props.addGame({ data: json }));
  });

  return (
    <>
      <GameHeader />
      <Section className="game">
        <RoomHeader />
        <Room />
      </Section>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addGame: (data) => {
      dispatch(addGameAction(data));
      dispatch(addHeroAction(data));
      dispatch(addTreasuresAction(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(Game);
