const addTreasuresAction = (data) => {
  return {
    type: "ADD_TREASURES_DATA",
    payload: {
      collection: data,
    },
  };
};

export { addTreasuresAction };
