const initialState = {
  collection: [],
};

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_GAME_DATA": {
      return {
        ...state,
        collection: payload.collection,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
