export class ToolsClass {
  static makeProxyToObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}
