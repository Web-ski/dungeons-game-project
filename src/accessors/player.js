export const isBrowser = () => typeof window !== "undefined";

export const playerMove = (type) => {
  switch (type) {
    case 38:
    case 87:
      console.log('Move top.');
      break;
    case 40:
    case 83:
      console.log('Move down.');
      break;
    case 37:
    case 65:
      console.log('Move left.');
      break;
    case 39:
    case 68:
      console.log('Move right.');
      break;
    default:
      console.log(`Sorry, we are out of ${type}.`);
  }
};