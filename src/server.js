import express, { json } from "express";
import cors from "cors";

import participantsRouter from "./routes/participants.js";
import messagesRouter from "./routes/messages.js";
import statusRouter from "./routes/status.js";
import { removeInactive } from "./functions/removeInactive.js";

const app = express();
app.use(cors());
app.use(json());

app.use("/participants", participantsRouter);
app.use("/messages", messagesRouter);
app.use("/status", statusRouter);

setInterval(removeInactive, 10000);

app.listen(5000, () => {
  console.log("Rodando!");
});
