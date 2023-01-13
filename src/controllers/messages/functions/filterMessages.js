export default function filterMessages(msg, user, limit) {
  let result = msg.filter(
    ({ from, to, type }) =>
      type === "message" ||
      type === "status" ||
      (type === "private_message" &&
        (from === user || to === user || to === "Todos" || to === "todos"))
  );

  if (limit) {
    result = result.slice(-limit);
  }

  return result;
}
