import { Message } from "../types/message";
import { mockUsers } from "../assets/mockUsers"; // todo: remove this line after server implementation

const endpoint = "../assets"; // todo: add endpoint (server) address (starting with http://)

/**
 * GET Request to get the list of messages
 **/
export async function getMessages() {
  // todo: replace this with fetch to get the messages from the server
  const mockMessagesWithNames = fetch(
    `http://localhost:3003/mockMessages`
  ).then((response) => response.json());
  // todo: this should be implemented in the server. Chat Messages should already have the authors' names.
  // todo: remove this mapping when getting the data from the server

  return mockMessagesWithNames;
}

/**
 * GET request to get the full list of users - id + name
 **/
export async function getUsers() {
  // todo: replace this with fetch to get the user list from the server
  const mockUsers = fetch(`http://localhost:3003/mockUsers`).then((response) =>
    response.json()
  );
  return mockUsers;
}

/**
 * GET request to get the full details of a user
 **/
export async function getUserDetails(userId: number) {
  // todo: replace this with fetch to get the user details from the server.
  //  For mocking example, we're calling an external JSON service.
  //  You can use mockUserDetails.ts for the list of user details in the server.
  const res = fetch(`http://localhost:3003/?id=${userId}`).then((response) =>
    response.json()
  );
  return res;
}

/**
 * POST request to add a message. The message contains: id, body, timestamp, authorId
 **/
export async function addNewMessage(message: Message) {
  // todo: implement sending a new message to the server
  fetch("http://localhost:3003/addMessege", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(message),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

/**
 * POST request to change the user's like of a message
 **/
export async function changeMessageLikes(
  messageId: number,
  userId: number,
  like: boolean
) {
  // todo: implement sending a rquest to change the like of a message by the user
}
