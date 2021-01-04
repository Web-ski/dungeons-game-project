import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Titles/Title";
import { NavLink } from "react-router-dom";

const Article = styled.article`
  height: 100%;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 30px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const Section = styled.section`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {

  return (
    <>
      <Header />
      <Section className="home">
        <Title/>
        <Article>
          <h1>Start the adventure!</h1>
          <NavLink to="/game">
            <Button>Play</Button>
          </NavLink>
        </Article>
      </Section>
    </>
  );
};

export default Home;
