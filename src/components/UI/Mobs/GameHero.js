import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { isBrowser, playerMove } from '../../../accessors/player';
import { changePositionAction } from "../../../api/player/action";
import HeroElem from './HeroElem';

const GameHero = (props) => {
  const [posX, setPosX] = useState();
  const [posY, setPosY] = useState();

  useEffect(() => {
    props.positionX !== undefined && setPosX(props.positionX);
    props.positionY !== undefined && setPosY(props.positionY);
  }, [props.positionX, props.positionY]);

  //oneKeyDown use with Hook
  const heroMove = event => {
    let m = playerMove(event.keyCode);
    //console.log(posX, posY);
    let x = parseInt(posX);
    let y = parseInt(posY);
    x = x + m.x;
    y = y + m.y;
    //console.log(x, y)
    props.move(x, y);
  };

  useEffect(() => {
    isBrowser() && window.addEventListener('keydown', heroMove);
    return () => {
      window.removeEventListener('keydown', heroMove)
    }
  }, [heroMove]);

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
