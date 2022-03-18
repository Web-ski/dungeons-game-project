import { COLUMN_LETTERS, BOARD_STEP } from "@/const/board-data.const";
export class MovementClass {
  static getHeroMove(position, key) {
    // wprowadzić warunek drzwi
    const letter = position.charAt(0);
    const letterPosition = COLUMN_LETTERS.indexOf(letter);
    const nmbr = parseInt(position.charAt(1));
    switch (key) {
      case "w":
      case "ArrowUp":
        if (COLUMN_LETTERS[letterPosition - 1] === COLUMN_LETTERS[0]) {
          return position;
        }
        return COLUMN_LETTERS[letterPosition - 1] + nmbr;
      case "d":
      case "ArrowRight":
        if (nmbr + 1 === 8) {
          return position;
        }
        return letter + (nmbr + 1);
      case "s":
      case "ArrowDown":
        if (COLUMN_LETTERS[letterPosition + 1] === COLUMN_LETTERS[8]) {
          return position;
        }
        return COLUMN_LETTERS[letterPosition + 1] + nmbr;
      case "a":
      case "ArrowLeft":
        if (nmbr - 1 === 0) {
          return position;
        }
        return letter + (nmbr - 1);
      default:
        return position;
    }
  }
  static setHeroMove(position, direction) {
    if (direction === "vertical") {
      const letter = position.charAt(0);
      const letterPosition = COLUMN_LETTERS.indexOf(letter);
      const value = BOARD_STEP * letterPosition;
      return value + "px";
    }
    if (direction === "horizontal") {
      const nmbr = position.charAt(1);
      const value = BOARD_STEP * nmbr;
      return value + "px";
    }
  }
}
