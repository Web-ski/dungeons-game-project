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
        hero: payload.collection.data.hero,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
