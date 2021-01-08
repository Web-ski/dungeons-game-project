const changePositionAction = (dataX, dataY) => {
  return {
    type: "CHANGE_POS",
    payload: {
      positionX: dataX,
      positionY: dataY,
    },
  };
};

const addHeroAction = (data) => {
  return {
    type: "ADD_HERO_DATA",
    payload: {
      collection: data,
    },
  };
};

const getCoinByHeroAction = () => {
  return {
    type: "GET_COIN",
    payload: {
      addCoin: 1,
    },
  };
};

export { changePositionAction, addHeroAction, getCoinByHeroAction };
