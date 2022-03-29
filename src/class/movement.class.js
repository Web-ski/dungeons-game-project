import { COLUMN_LETTERS, BOARD_STEP } from "@/const/board-data.const";
export class MovementClass {
  static checkAvailableField(fieldsList) {
    if (!fieldsList) {
      return;
    }
    const availableFields = fieldsList.filter(
      ({ type }) =>
        type === "floor" ||
        type === "door--top" ||
        type === "door--right" ||
        type === "door--bottom" ||
        type === "door--left"
    );
    const availablePositions = availableFields.map((elem) => elem.position);
    return availablePositions;
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
  static setHeroLeaveBoard(crossedEntryPosition) {
    switch (crossedEntryPosition) {
      case "E8":
        return "E1";
      case "E0":
        return "E7";
      case "I4":
        return "B4";
      case "A4":
        return "H4";
      default:
        return crossedEntryPosition;
    }
  }
}
