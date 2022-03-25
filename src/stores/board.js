import { defineStore } from "pinia";
import { BoardgameClass } from "../class/board.class";
import { ToolsClass } from "../class/tools.class";

export const useBoardStore = defineStore("board", {
  state: () => {
    return {
      isProcessing: false,
      isBoardSwitching: true,
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
    setCurrentRoom(number) {
      this.currentRoom = number;
      setTimeout(() => this.setBoardSwitching(false), 200);
    },
    setBoardSwitching(value) {
      this.isBoardSwitching = value;
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
    getRoomEntries: (state) => {
      if (!state.rooms.length > 0) {
        return;
      }
      const [choosenRoom] = state.rooms.filter(
        (room) => room.id === state.currentRoom
      );
      return ToolsClass.makeProxyToObject(choosenRoom).entries;
    },
    getRoomMaterials: (state) => {
      if (!state.rooms.length > 0) {
        return;
      }
      const [choosenRoom] = state.rooms.filter(
        (room) => room.id === state.currentRoom
      );
      return ToolsClass.makeProxyToObject(choosenRoom).materials;
    },
  },
});
