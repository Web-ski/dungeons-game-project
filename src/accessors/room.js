export const addPosY = (number) => {
  switch (number) {
    case "00":
    case "01":
    case "02":
    case "03":
    case "04":
    case "05":
    case "06":
    case "07":
    case "08":
      return "0";
    case "09":
    case "10":
    case "11":
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
      return "50";
    case "18":
    case "19":
    case "20":
    case "21":
    case "22":
    case "23":
    case "24":
    case "25":
    case "26":
      return "100";
    case "27":
    case "28":
    case "29":
    case "30":
    case "31":
    case "32":
    case "33":
    case "34":
    case "35":
      return "150";
    case "36":
    case "37":
    case "38":
    case "39":
    case "40":
    case "41":
    case "42":
    case "43":
    case "44":
      return "200";
    case "45":
    case "46":
    case "47":
    case "48":
    case "49":
    case "50":
    case "51":
    case "52":
    case "53":
      return "250";
    case "54":
    case "55":
    case "56":
    case "57":
    case "58":
    case "59":
    case "60":
    case "61":
    case "62":
      return "300";
    case "63":
    case "64":
    case "65":
    case "66":
    case "67":
    case "68":
    case "69":
    case "70":
    case "71":
      return "350";
    case "72":
    case "73":
    case "74":
    case "75":
    case "76":
    case "77":
    case "78":
    case "79":
    case "80":
      return "400";
    default:
      console.log(`Sorry, we are out of ${number}.`);
  }
};

export const addPosX = (number) => {
  switch (number) {
    case "00":
    case "09":
    case "18":
    case "27":
    case "36":
    case "45":
    case "54":
    case "63":
    case "72":
      return "0";
    case "01":
    case "10":
    case "19":
    case "28":
    case "37":
    case "46":
    case "55":
    case "64":
    case "73":
      return "50";
    case "02":
    case "11":
    case "20":
    case "29":
    case "38":
    case "47":
    case "56":
    case "65":
    case "74":
      return "100";
    case "03":
    case "12":
    case "21":
    case "30":
    case "39":
    case "48":
    case "57":
    case "66":
    case "75":
      return "150";
    case "04":
    case "13":
    case "22":
    case "31":
    case "40":
    case "49":
    case "58":
    case "67":
    case "76":
      return "200";
    case "05":
    case "14":
    case "23":
    case "32":
    case "41":
    case "50":
    case "59":
    case "68":
    case "77":
      return "250";
    case "06":
    case "15":
    case "24":
    case "33":
    case "42":
    case "51":
    case "60":
    case "69":
    case "78":
      return "300";
    case "07":
    case "16":
    case "25":
    case "34":
    case "43":
    case "52":
    case "61":
    case "70":
    case "79":
      return "350";
    case "08":
    case "17":
    case "26":
    case "35":
    case "44":
    case "53":
    case "62":
    case "71":
    case "80":
      return "400";
    default:
      console.log(`Sorry, we are out of ${number}.`);
  }
};