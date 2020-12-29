export const isBrowser = () => typeof window !== "undefined";

export const playerMove = (type) => {
  switch (type) {
    case 38:
    case 87:
      return {x: 0, y: -50};
      break;
    case 40:
    case 83:
      return {x: 0, y: 50};
      break;
    case 37:
    case 65:
      return {x: -50, y: 0};
      break;
    case 39:
    case 68:
      return {x: 50, y: 0};
      break;
    default:
      console.log(`Sorry, we are out of ${type}.`);
  }
};