import React from "react";
import Title from "../UI/Titles/Title";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #111111;
`;

const GameHeader = () => {

  return (
    <Section className="header">
      <Title/>
    </Section>
  );
};

export default GameHeader;
