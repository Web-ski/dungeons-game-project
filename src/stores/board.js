import { defineStore } from "pinia";
import { BoardgameClass } from "../class/board.class";
import { ToolsClass } from "../class/tools.class";

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
      this.rooms = data.map((item) => {
        const buildStructure = BoardgameClass.makeBoard(item);
        item.structures = buildStructure;
        return item;
      });
      this.isProcessing = false;
    },
  },
  getters: {
    getCurrentRoom: (state) => {
      if (!state.rooms.length > 0) {
        return;
      }
      const [choosenRoom] = state.rooms.filter(
        (room) => room.id === state.currentRoom
      );
      return ToolsClass.makeProxyToObject(choosenRoom).structures;
    },
  },
});
