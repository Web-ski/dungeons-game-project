const changePositionAction = (dataX, dataY) => {
  return {
    type: "CHANGE_POS",
    payload: {
      positionX: dataX,
      positionY: dataY,
    },
  };
};

const changePositionYAction = (data) => {
  return {
    type: "CHANGE_POS_Y",
    payload: {
      positionY: data,
    },
  };
};

export { changePositionAction, changePositionYAction };
