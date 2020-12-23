import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <section className="home">
        <h1>Witaj w grze</h1>
        <h1>Dangeon's Ghosts!</h1>
        <NavLink to="/game">
          <Button>Graj</Button>
        </NavLink>
      </section>
    </>
  );
};

export default Home;
