import { ToolsClass } from "./tools.class";
import { COLUMN_LETTERS } from "@/const/board-data.const";
export class BoardgameClass {
  static makeBoard(board) {
    const boardObj = ToolsClass.makeProxyToObject(board);
    console.log(board);
    const structure = [];
    const column = 9;
    const row = 9;
    for (let i = 0; i < column; i++) {
      let letter = COLUMN_LETTERS[i];
      for (let i = 0; i < row; i++) {
        let specify;
        specify = this.specifyTile(boardObj.type, boardObj.model, letter + i);
        const entry = boardObj.entries.find(
          (entry) => entry.position === specify.position
        );
        structure.push(entry || specify);
      }
    }
    return structure;
  }
  static boardTile(type, position, destination) {
    return { type: type, position: position, destination: destination };
  }
  static specifyTile(type, model, position) {
    switch (type) {
      case "cellar":
        switch (position) {
          case "A0":
            return this.boardTile("corner--left-top", position, null);
          case "A8":
            return this.boardTile("corner--right-top", position, null);
          case "I0":
            return this.boardTile("corner--left-bottom", position, null);
          case "I8":
            return this.boardTile("corner--right-bottom", position, null);
          case "A1":
          case "A2":
          case "A3":
          case "A5":
          case "A6":
          case "A7":
            return this.boardTile("wall--top", position, null);
          case "A4":
            if (model === "cell") {
              return this.boardTile("wall-fire--top", position, null);
            } else {
              return this.boardTile("wall--top", position, null);
            }
          case "B8":
          case "C8":
          case "D8":
          case "E8":
          case "F8":
          case "G8":
          case "H8":
            return this.boardTile("wall--right", position, null);
          case "I1":
          case "I2":
          case "I3":
          case "I5":
          case "I6":
          case "I7":
            return this.boardTile("wall--bottom", position, null);
          case "I4":
            if (model === "cell") {
              return this.boardTile("wall-fire--bottom", position, null);
            } else {
              return this.boardTile("wall--bottom", position, null);
            }
          case "B0":
          case "C0":
          case "D0":
          case "E0":
          case "F0":
          case "G0":
          case "H0":
            return this.boardTile("wall--left", position, null);
          default:
            return this.boardTile("floor", position, null);
        }
      default:
        return this.boardTile("floor", position, null);
    }
  }
}
