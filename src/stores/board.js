import { defineStore } from "pinia";
import { BoardgameClass } from "../class/board.class";

export const useBoardStore = defineStore("board", {
  state: () => {
    return {
      currentRoom: 1,
      rooms: [],
    };
  },
  actions: {
    getBoardFromApi() {
      fetch("/mocks/dungeons.json")
        .then((response) => response.json())
        .then((data) => (this.state.rooms = data.rooms));
    },
  },
  getters: {
    getCurrentRoom: (state) => {
      const room = BoardgameClass.makeBoard(
        state.rooms.filter((room) => room.id === state.currentRoom)
      );
      console.log(room);
      return room;
    },
  },
});
