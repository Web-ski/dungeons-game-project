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
      // let coinToRemove;
      // const findCoinToRemove = (removeCoinId) => {
      //   state.treasures[0].coins.map(
      //     (item, index) =>
      //       item.coinId === removeCoinId && (coinToRemove = index)
      //   );
      // };

      // payload.coin !== undefined && findCoinToRemove(payload.coin);
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
