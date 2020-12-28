import { createStore, combineReducers } from "redux";
import gameReducer from "./game/reducer";
import playerPositionReducer from "./player/reducer";

const reducer = combineReducers({
  game: gameReducer,
  position: playerPositionReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
