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

export { changePositionAction, addHeroAction };
