const initialState = {
  data: [],
};

const playerPositionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_POS_X": {
      return {
        ...state,
        positionX: payload.positionX,
      };
    }
    case "CHANGE_POS_Y": {
      return {
        ...state,
        positionY: payload.positionY,
      };
    }
    default:
      return state;
  }
};

export default playerPositionReducer;
