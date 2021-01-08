const initialState = {
  collection: [],
};

const playerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_HERO_DATA": {
      return {
        ...state,
        hero: payload.collection.data.hero,
        positionX: payload.collection.data.hero.positionX,
        positionY: payload.collection.data.hero.positionY,
      };
    }
    case "CHANGE_POS": {
      return {
        ...state,
        positionX: payload.positionX,
        positionY: payload.positionY,
      };
    }
    case "GET_COIN": {
      return {
        ...state,
        hero: {
          ...state.hero,
          coins: state.hero.coins + 1,
        },
      };
    }
    default:
      return state;
  }
};

export default playerReducer;
