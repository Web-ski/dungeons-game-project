const initialState = {
  collection: [],
};

const treasuresReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TREASURES_DATA": {
      return {
        ...state,
        treasures: payload.collection,
      };
    }
    default:
      return state;
  }
};

export default treasuresReducer;
