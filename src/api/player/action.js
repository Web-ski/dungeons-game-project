const changePositionXAction = (data) => {
  return {
    type: "CHANGE_POS_X",
    payload: {
      positionX: data,
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

export { changePositionXAction, changePositionYAction };
