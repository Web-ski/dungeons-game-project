import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Room from "../../components/Room/Room";
import styled from "styled-components";
const URL = "/gameData/gameboard.json";

const Game = () => {
  const [rooms, setRooms] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setRooms({ data: json }));
  }, [URL]);

  const Section = styled.section`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <Header />
      <Section className="game">
        <Room collection={rooms.data} />
      </Section>
    </>
  );
};

export default Game;
