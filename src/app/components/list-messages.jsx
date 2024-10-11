import React from "react";
import { getMessages } from "../actions";
import Message from "./message";

const ListMessages = async () => {
  const messages = await getMessages();
  if (messages.length === 0) {
    return;
  }
  return (
    <div className="sticky top-10 bg-white/60 p-5 border shadow rounded-3xl space-y-10 ">
      {messages.map((m, i) => {
        return <Message key={m.message_id} data={m} />;
      })}
    </div>
  );
};

export default ListMessages;
