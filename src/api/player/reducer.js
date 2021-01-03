const initialState = {
  collection: [],
};

const playerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_HERO_DATA": {
      return {
        ...state,
        hero: payload.collection.data.hero,
        positionX: payload.collection.data.hero[0].positionX,
        positionY: payload.collection.data.hero[0].positionY
      };
    }
    case "CHANGE_POS": {
      return {
        ...state,
        positionX: payload.positionX,
        positionY: payload.positionY
      };
    }
    default:
      return state;
  }
};

export default playerReducer;
