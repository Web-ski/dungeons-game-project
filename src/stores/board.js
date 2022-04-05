import { defineStore } from "pinia";
import { BoardgameClass } from "../class/board.class";
import { ToolsClass } from "../class/tools.class";
import { InteractionClass } from "@/class/interaction.class.js";
import { MovementClass } from "@/class/movement.class.js";
import { BASE_URL } from "@/const/api.const.js";

export const useBoardStore = defineStore("board", {
  state: () => {
    return {
      isProcessing: false,
      isBoardSwitching: true,
      currentRoom: {},
      rooms: [],
    };
  },
  actions: {
    getBoardFromApi() {
      this.isProcessing = true;
      fetch(BASE_URL + "mocks/dungeons.json")
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
    openDoor(door) {
      const room = ToolsClass.makeProxyToObject(this.currentRoom);
      const doorOpenType = door.type.replace("-closed", "");
      room.entries.map((entry, index) => {
        if (entry.type === door.type) {
          console.log(this.currentRoom.entries[index].type);
          this.currentRoom.entries[index].type = doorOpenType;
        }
      });
      room.structures.map((elem, index) => {
        if (elem.type === door.type) {
          console.log(this.currentRoom.structures[index].type);
          this.currentRoom.structures[index].type = doorOpenType;
        }
      });
    },
  },
  getters: {
    getCurrentRoom: (state) => {
      return ToolsClass.makeProxyToObject(state.currentRoom).structures;
    },
    getRoomEntries: (state) => {
      return ToolsClass.makeProxyToObject(state.currentRoom).entries;
    },
    getRoomMaterials: (state) => {
      return ToolsClass.makeProxyToObject(state.currentRoom).materials;
    },
    getRoomThreats: (state) => {
      console.log("threat");
      return ToolsClass.makeProxyToObject(state.currentRoom).threats;
    },
    getClosedDoorsPostitons: (state) => {
      const doors = ToolsClass.makeProxyToObject(state.currentRoom).entries;
      return InteractionClass.getClosedDoors(doors);
    },
    getBoardAvailablePositions: (state) => {
      const room = ToolsClass.makeProxyToObject(state.currentRoom).structures;
      return MovementClass.checkAvailableField(room);
    },
  },
});
