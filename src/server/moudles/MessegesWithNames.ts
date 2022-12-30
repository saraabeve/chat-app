import { Message } from "./../../types/message";
import { mockUserDetails } from "./mockUserDetails";
import { mockMessages, listMesseges } from "./mockMessages";

const listUsers = mockUserDetails();
const listofMesseges = listMesseges();

export const MessagewithName = () => {
  const mockMessagesWithNames = listofMesseges.map((message: Message) => {
    const author = listUsers.find((user) => user.id === message.authorId);
    const authorName = author && author.name;
    return { ...message, authorName };
  });

  return mockMessagesWithNames;
};
