import { Message } from "./../types/message";
import express, { Response, Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { mockUserDetails } from "./moudles/mockUserDetails";
import { mockMessages, listMesseges, addMessege } from "./moudles/mockMessages";
import { MessagewithName } from "./moudles/MessegesWithNames";

const listUsers = mockUserDetails();
const listofMesseges = listMesseges();

const app = express();

app.use(bodyParser.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/mockUsers", (req: Request, res: Response) => {
  res.send(listUsers);
});
app.get("/:id", (req: Request, res: Response) => {
  console.log(req.params.id);
  console.log(listUsers[Number(req.params?.id) - 1]);
  res.send(listUsers[Number(req.params?.id) - 1]);
});

app.post("/addMessege", (req: Request, res: Response) => {
  const newmessege = req.body;
  console.log(newmessege);
  addMessege(newmessege);
  res.send({ status: "added" });
});

app.listen(3003, () => {
  console.log("Server is running");
});
