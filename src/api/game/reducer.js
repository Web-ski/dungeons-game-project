const initialState = {
  collection: [],
};

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_GAME_DATA": {
      return {
        ...state,
        roomsCollection: payload.collection.data.rooms,
        activeRoom: payload.collection.data.startRoomId,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
