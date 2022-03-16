import { defineStore } from "pinia";
import { BoardgameClass } from "../class/board.class";

export const useBoardStore = defineStore("board", {
  state: () => {
    return {
      isProcessing: false,
      currentRoom: 1,
      rooms: [],
    };
  },
  actions: {
    getBoardFromApi() {
      this.isProcessing = true;
      fetch("/mocks/dungeons.json")
        .then((response) => response.json())
        .then((data) => this.setDataToStore(data.rooms));
    },
    setDataToStore(data) {
      console.log(this.rooms, " ", data);
      this.rooms = data;
      this.isProcessing = false;
    },
  },
  getters: {
    getCurrentRoom: (state) => {
      if (!state.rooms.length > 0) {
        return;
      }
      const room = BoardgameClass.makeBoard(
        state.rooms.filter((room) => room.id === state.currentRoom)
      );
      console.log(room);
      return room;
    },
  },
});
