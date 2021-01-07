import { createStore, combineReducers } from "redux";
import gameReducer from "./game/reducer";
import playerReducer from "./player/reducer";
import treasuresReducer from "./treasures/reducer";

const reducer = combineReducers({
  game: gameReducer,
  player: playerReducer,
  treasures: treasuresReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
