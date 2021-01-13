import React from "react";
import Header from "../../components/Header/Header";
import Subtitle from "../../components/UI/Titles/Subtitle";
import styled from "styled-components";
import { GAME_NAME } from "../../constants/constants";

const BodyText = styled.p`
  color: #eeeeee;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 160%;
  letter-spacing: 1px;
`;

const BodyLink = styled.a`
  color: MediumVioletRed;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 160%;
  letter-spacing: 1px;
`;

const About = () => {
  return (
    <>
      <Header />
      <section className="about">
        <Subtitle text={"About"}></Subtitle>
      </section>
      <BodyText>
        {`"${GAME_NAME}" is project of old styled, adventure, computer game.`}
      </BodyText>
      <BodyText>
        It is created with React.js, Redux and Styled Components. All layout is
        made by the author.
      </BodyText>
      <BodyText>***</BodyText>
      <BodyText>
        2020 by{" "}
        <BodyLink href="http://nieczuja-portfolio.pl" target="_blank">
          Paweł Nieczuja-Ostrowski
        </BodyLink>
      </BodyText>
    </>
  );
};

export default About;
