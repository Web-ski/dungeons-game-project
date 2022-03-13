export class BoardgameClass {
  static makeBoard(board) {
    console.log(board);
    const structure = [];
    const columnLetters = ["A", "B", "C", "D", "E", "F", "G", "I", "J"];
    const column = 9;
    const row = 9;
    for (let i = 0; i < column; i++) {
      let letter = columnLetters[i];
      for (let i = 0; i < row; i++) {
        let elem;
        elem = this.boardTiles("floor", letter + i, null);
        structure.push(elem);
      }
    }
    console.log(structure);
    return structure;
  }
  static boardTiles(type, position, destination) {
    return { type: type, position: position, destination: destination };
  }
}
