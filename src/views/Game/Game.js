import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addGameAction } from "../../api/game/action";
import { addHeroAction } from "../../api/player/action";
import GameHeader from "../../components/Header/GameHeader";
import Room from "../../components/Room/Room";
import styled from "styled-components";
const URL = "/gameData/gameboard.json";

const Game = (props) => {
  //const [rooms, setRooms] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => props.addGame({ data: json }));
  }, [URL]);
    
  const Section = styled.section`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <GameHeader />
      <Section className="game">
        <Room />
      </Section>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addGame: (data) => {dispatch(addGameAction(data)); dispatch(addHeroAction(data))},
  };
};

export default connect(null, mapDispatchToProps)(Game);
