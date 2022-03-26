import { defineStore } from "pinia";
import { BoardgameClass } from "../class/board.class";
import { ToolsClass } from "../class/tools.class";

export const useBoardStore = defineStore("board", {
  state: () => {
    return {
      isProcessing: false,
      isBoardSwitching: true,
      currentRoom: {}, // dodać akcję i zmienić gettery
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
      this.setCurrentRoom("b1");
      this.isProcessing = false;
    },
    setCurrentRoom(roomNumber) {
      const [choosenRoom] = this.rooms.filter((room) => room.id === roomNumber);
      this.currentRoom = choosenRoom;
      setTimeout(() => this.setBoardSwitching(false), 200);
    },
    setBoardSwitching(value) {
      this.isBoardSwitching = value;
    },
    removeMaterialFromRoom(material) {
      const materials = ToolsClass.makeProxyToObject(
        this.currentRoom
      ).materials;
      let materialIndex;
      materials.map((item, index) => {
        if (item.id === material.id) {
          materialIndex = index;
        }
      });
      materials.splice(materialIndex, 1);
      this.currentRoom.materials = materials;
    },
  },
  getters: {
    getCurrentRoom: (state) => {
      // if (!state.rooms.length > 0) {
      //   return;
      // }
      // const [choosenRoom] = state.rooms.filter(
      //   (room) => room.id === state.currentRoom
      // );
      return ToolsClass.makeProxyToObject(state.currentRoom).structures;
    },
    getRoomEntries: (state) => {
      // if (!state.rooms.length > 0) {
      //   return;
      // }
      // const [choosenRoom] = state.rooms.filter(
      //   (room) => room.id === state.currentRoom
      // );
      return ToolsClass.makeProxyToObject(state.currentRoom).entries;
    },
    getRoomMaterials: (state) => {
      // if (!state.rooms.length > 0) {
      //   return;
      // }
      // const [choosenRoom] = state.rooms.filter(
      //   (room) => room.id === state.currentRoom
      // );
      return ToolsClass.makeProxyToObject(state.currentRoom).materials;
    },
  },
});
