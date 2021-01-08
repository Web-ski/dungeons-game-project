const addTreasuresAction = (data) => {
  return {
    type: "ADD_COINS_DATA",
    payload: {
      collection: data,
    },
  };
};

const removeCoinsAction = (data) => {
  return {
    type: "REMOVE_COIN",
    payload: {
      coin: data,
    },
  };
};

export { addTreasuresAction, removeCoinsAction };
