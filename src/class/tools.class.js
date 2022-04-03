export class ToolsClass {
  static makeProxyToObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  static firstLetterUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
