export class InteractionClass {
  static getClosedDoors(entries) {
    if (!entries) {
      return;
    }
    const closedDoors = entries.filter(
      ({ type }) =>
        type === "door-closed--top" ||
        type === "door-closed--right" ||
        type === "door-closed--bottom" ||
        type === "door-closed--left"
    );
    const closedDoorsPositions = closedDoors.map((elem) => elem.position);
    return closedDoorsPositions;
  }
}
