import { defineStore } from "pinia";
import { BoardgameClass } from "../class/board.class";

export const useBoardStore = defineStore("board", {
  state: () => {
    return {
      currentRoom: 1,
      rooms: [
        {
          id: 1,
          type: "cellar",
          entries: [{ type: "door", position: "B9", destination: 2 }],
          structures: [],
        },
      ],
    };
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
