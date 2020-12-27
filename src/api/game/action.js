const addGameAction = (data) => {
  return {
    type: "ADD_GAME_DATA",
    payload: {
      collection: data,
    },
  };
};

export { addGameAction };
