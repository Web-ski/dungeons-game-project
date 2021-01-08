import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const HEART_IMG = "/gameData/images/drawn-heart-pink.svg";
const COIN = "/gameData/images/coin-green.png";

const Section = styled.section`
  width: 450px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #06150c;
`;

const HeroLife = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #06150c;
`;

const StyledLink = styled(NavLink)`
  color: #d9c746;
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

const InfoText = styled.p`
  width: 25px;
  height: 25px;
  color: white;
`;

const RoomHeader = (props) => {
  return (
    <Section className="RoomHeader">
      <HeroLife>
        <Heart heart={`url('${HEART_IMG}')`} />
        <InfoText>{props.hero && props.hero.life}</InfoText>
        <Heart heart={`url('${COIN}')`} />
        <InfoText>{props.hero && props.hero.coins}</InfoText>
      </HeroLife>
      <StyledLink to="/">Exit</StyledLink>
    </Section>
  );
};

const mapStateToProps = (state) => ({
  hero: state.player.hero,
});

export default connect(mapStateToProps)(RoomHeader);
