const addGameAction = (data) => {
  return {
    type: "ADD_GAME_DATA",
    payload: {
      collection: data,
    },
  };
};

const switchRoomAction = (data) => {
  return {
    type: "SWITCH_ROOM_ID",
    payload: {
      roomId: data,
    },
  };
};

export { addGameAction, switchRoomAction };
