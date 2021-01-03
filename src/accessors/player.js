export const isBrowser = () => typeof window !== "undefined";

export const playerMove = (type) => {
  switch (type) {
    case 38:
    case 87:
      return { x: 0, y: -50 };
    case 40:
    case 83:
      return { x: 0, y: 50 };
    case 37:
    case 65:
      return { x: -50, y: 0 };
    case 39:
    case 68:
      return { x: 50, y: 0 };
    default:
      console.log(`Sorry, we are out of ${type}.`);
  }
};

const fieldIdChecking = (x, y) => {
  switch (y) {
    case 0:
      switch (x) {
        case 0:
          return "00";
        case 50:
          return "01";
        case 100:
          return "02";
        case 150:
          return "03";
        case 200:
          return "04";
        case 250:
          return "05";
        case 300:
          return "06";
        case 350:
          return "07";
        case 400:
          return "08";
        default:
          return false;
      }
    case 50:
      switch (x) {
        case 0:
          return "09";
        case 50:
          return "10";
        case 100:
          return "11";
        case 150:
          return "12";
        case 200:
          return "13";
        case 250:
          return "14";
        case 300:
          return "15";
        case 350:
          return "16";
        case 400:
          return "17";
        default:
          return false;
      }
    case 100:
      switch (x) {
        case 0:
          return "18";
        case 50:
          return "19";
        case 100:
          return "20";
        case 150:
          return "21";
        case 200:
          return "22";
        case 250:
          return "23";
        case 300:
          return "24";
        case 350:
          return "25";
        case 400:
          return "26";
        default:
          return false;
      }
    case 150:
      switch (x) {
        case 0:
          return "27";
        case 50:
          return "28";
        case 100:
          return "29";
        case 150:
          return "30";
        case 200:
          return "31";
        case 250:
          return "32";
        case 300:
          return "33";
        case 350:
          return "34";
        case 400:
          return "35";
        default:
          return false;
      }
    case 200:
      switch (x) {
        case 0:
          return "36";
        case 50:
          return "37";
        case 100:
          return "38";
        case 150:
          return "39";
        case 200:
          return "40";
        case 250:
          return "41";
        case 300:
          return "42";
        case 350:
          return "43";
        case 400:
          return "44";
        default:
          return false;
      }
    case 250:
      switch (x) {
        case 0:
          return "45";
        case 50:
          return "46";
        case 100:
          return "47";
        case 150:
          return "48";
        case 200:
          return "49";
        case 250:
          return "50";
        case 300:
          return "51";
        case 350:
          return "52";
        case 400:
          return "53";
        default:
          return false;
      }
    case 300:
      switch (x) {
        case 0:
          return "54";
        case 50:
          return "55";
        case 100:
          return "56";
        case 150:
          return "57";
        case 200:
          return "58";
        case 250:
          return "59";
        case 300:
          return "60";
        case 350:
          return "61";
        case 400:
          return "62";
        default:
          return false;
      }
    case 350:
      switch (x) {
        case 0:
          return "63";
        case 50:
          return "64";
        case 100:
          return "65";
        case 150:
          return "66";
        case 200:
          return "67";
        case 250:
          return "68";
        case 300:
          return "69";
        case 350:
          return "70";
        case 400:
          return "71";
        default:
          return false;
      }
    case 400:
      switch (x) {
        case 0:
          return "72";
        case 50:
          return "73";
        case 100:
          return "74";
        case 150:
          return "75";
        case 200:
          return "76";
        case 250:
          return "77";
        case 300:
          return "78";
        case 350:
          return "79";
        case 400:
          return "80";
        default:
          return false;
      }
    default:
      return false;
  }
};

export const playerBackground = (x, y, field) => {
  const roomElems = field;
  //console.log(roomElems);
  //x,y === filedId
  const fieldId = fieldIdChecking(x, y);
  let floorFound = roomElems.floor.find((item) => item === fieldId);
  floorFound = floorFound ? {"floor": fieldId} : false;
  let doorFound = roomElems.door.find((item) => item === fieldId);
  doorFound = doorFound ? {"door": fieldId} : false;
  let found = doorFound || floorFound;
  return found;
  //if fieldId === wall
};
