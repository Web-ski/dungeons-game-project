const initialState = {
  collection: [],
};

const treasuresReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_COINS_DATA": {
      return {
        ...state,
        coins: payload.collection.data.coins,
      };
    }
    case "REMOVE_COIN": {
      return {
        ...state,
        coins: state.coins.filter((item) => item.coinId !== payload.coin),
      };
    }
    default:
      return state;
  }
};

export default treasuresReducer;
