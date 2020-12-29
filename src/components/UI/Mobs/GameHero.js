import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { isBrowser, playerMove } from '../../../accessors/player';
import { changePositionAction } from "../../../api/player/action";

import styled, { css } from "styled-components";
// const HERO = "/gameData/images/gnome.svg";
const HERO = "/gameData/images/chemist-svgrepo-com.svg";

const GameHero = (props) => {
  const [posX, setPosX] = useState();
  const [posY, setPosY] = useState();

  useEffect(() => {
    props.positionX !== undefined && setPosX(props.positionX);
    props.positionY !== undefined && setPosY(props.positionY);
  }, [props.positionX, props.positionY]);

  //oneKeyDown use with Hook
  useEffect(() => {
    isBrowser() && window.addEventListener('keydown', (event) => {

      const heroMove = () => {
        //console.log(event.keyCode);
        let m = playerMove(event.keyCode);
        let x = parseInt(posX);
        let y = parseInt(posY);
        x = x + m.x;
        y = y + m.y;
        console.log(x, y)
        props.move(x, y);
      }
      posX !== undefined && heroMove();
    });
  });

  const HeroElem = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: ${({ top }) => top || "200px"};
  left: ${({ left }) => left || "200px"};
  background-color: transparent;
  background-image: ${`url('${HERO}')`};
  background-size: cover;
  background-repeat: no-repeat;
`;

  return (
    <HeroElem top={posY + "px"} left={posX + "px"} />
  );
}

const mapStateToProps = (state) => ({
  hero: state.player.hero,
  positionX: state.player.positionX,
  positionY: state.player.positionY,
  game1: state.game.hero !== undefined && state.game.hero[0].positionX,
  //heroX: state.hero.positionX,
});

const mapDispatchToProps = (dispatch) => {
  return {
    move: (dataX, dataY) => dispatch(changePositionAction(dataX, dataY)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameHero);
