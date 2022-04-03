import { ToolsClass } from "./tools.class";
import { COLUMN_LETTERS } from "@/const/board-data.const";
import { CELLAR_MODEL } from "@/const/models/cellar.const.js";
export class BoardgameClass {
  static makeBoard(board) {
    const boardObj = ToolsClass.makeProxyToObject(board);
    console.log(board);
    console.log(boardObj);
    const structure = [];
    const column = 9;
    const row = 9;
    for (let i = 0; i < column; i++) {
      let letter = COLUMN_LETTERS[i];
      for (let i = 0; i < row; i++) {
        let specify;
        specify = this.setTile(
          boardObj.type,
          boardObj.model,
          boardObj.orientation,
          letter + i
        );
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
  static setTile(type, model, orientation, position) {
    console.log(type, model, orientation, position);
    const modelName = orientation
      ? CELLAR_MODEL[model][orientation][position.charAt(0)][
          parseInt(position.charAt(1))
        ]
      : CELLAR_MODEL[model][position.charAt(0)][parseInt(position.charAt(1))];
    return (
      this.boardTile(modelName, position, null) ||
      this.boardTile("dark-board", position, null)
    );
  }
}
