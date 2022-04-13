import { COLUMN_LETTERS, BOARD_STEP } from "@/const/board-data.const";

export class ThreatClass {
  static setThreatPosition(position, direction) {
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
