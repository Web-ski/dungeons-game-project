import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const HEART_IMG = "/gameData/images/drawn-heart-pink.svg";

const Section = styled.section`
  width: 450px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111111;
`;

const HeroLife = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111111;
`;

const StyledLink = styled(NavLink)`
  color: violet;
  font-weight: bold;
  text-decoration: none;
  padding: 10px;

  &:hover {
    color: white;
  }
`;

const Heart = styled.div`
width: 25px;
height: 25px;
margin: 0;
background-color: transparent;
background-image: ${({ heart }) => heart};
background-size: cover;
background-repeat: no-repeat;
`;

const RoomHeader = (props) => {

  const addLifeHearts = () => {
    let hearts = [];
    //hearts.length = props.hero[0].life;
    for (let i = 0; i < props.hero[0].life; i++) {
      hearts.push(i);
    }
    return hearts.map((item, index) => <Heart key={item + index} heart={`url('${HEART_IMG}')`} />)
  }

  return (
    <Section className="RoomHeader">
      <HeroLife>
        {props.hero && addLifeHearts()}
      </HeroLife>
      <StyledLink to="/">Exit</StyledLink>
    </Section>
  );
};

const mapStateToProps = (state) => ({
  hero: state.player.hero,
});

export default connect(mapStateToProps)(RoomHeader);