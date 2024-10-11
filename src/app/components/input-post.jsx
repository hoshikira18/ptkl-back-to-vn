"use client";
import React, { useEffect, useState } from "react";
import { postMessage } from "../actions";

const InputPost = ({ session }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(message);
  }, [message]);

  const handleSendMessage = async () => {
    await postMessage({
      name: session.user.name,
      image: session.user.image,
      message: message,
    });
  };

  return (
    <div className="bg-white p-5 rounded-3xl space-y-3 sticky -top-7 border shadow z-20">
      <div className="text-2xl font-semibold">
        Xin chào, <span className="text-green-500">{session.user.name}</span>
      </div>
      <form method="POST" className="grid gap-2 grid-cols-12">
        <div className="mt-1 col-span-2 w-full md:col-span-1 rounded-full aspect-square overflow-hidden border-2 border-green-600">
          <img
            src={session.user.image}
            alt="user_image"
            className="w-full object-cover"
          />
        </div>
        <div className="col-span-10 md:col-span-11 text-lg">
          <textarea
            required
            name="message"
            id="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Hãy viết điều gì đấy cho tôi nhé!"
            className="outline-none border-2 rounded-2xl w-full p-3"
          ></textarea>
          <button
            onClick={handleSendMessage}
            className="px-3 py-1 md:py-2 bg-green-600 text-white rounded-md"
          >
            Gửi ở đây nè
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputPost;
