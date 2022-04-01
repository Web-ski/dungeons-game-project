export class DialogClass {
  static chooseDialogText(dialog) {
    if (typeof dialog === "string") {
      return dialog;
    }

    const text = dialog[Math.floor(Math.random() * dialog.length)];
    return text;
  }
}
