import { messages, users } from "../../../src/data/mongoDB.js";
import filterMessages from "./functions/filterMessages.js";

export async function getMessages(req, res) {
  let limit = req.query.limit;
  try {
    const user = req.headers.user;
    let messageArr = await messages.find().toArray();
    const isExistent = await users.findOne({ name: user });

    if (!user || !isExistent) {
      res.status(422).send("missing user field or user not found");
      return;
    }

    if (limit === undefined || limit === "") {
      res.send(filterMessages(messageArr, user, limit));
      return;
    }

    limit = Number(limit);

    if (isNaN(limit) || limit <= 0) {
      res.status(422).send("invalid limit query param");
      return;
    }

    messageArr = filterMessages(messageArr, user, limit);

    res.send(messageArr.reverse());
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
