import { stripHtml } from "string-strip-html";

export function sanitization(object, boolean) {
  if (boolean) {
    //participant

    object.name = stripHtml(object.name).result.trim();
    return;
  }
  //message

  object.type = stripHtml(object.type).result.trim();
  object.from = stripHtml(object.from).result.trim();
  object.to = stripHtml(object.to).result.trim();
  object.text = stripHtml(object.text).result.trim();
}
