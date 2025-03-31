{/*"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";

interface Message {
  id: number;
  roomId: string;
  userId: string;
  message: string;
  replyTo?: string | null;
}

const socket = io();

export default function Chat() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [replyTo, setReplyTo] = useState<Message | null>(null);

  const sendMessage = async () => {
    const newMessage: Message = {
      id: Date.now(),
      roomId: "room1",
      userId: "user123",
      message,
      replyTo: replyTo ? replyTo.message : null,
    };

    await fetch("/api/messages", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: { "Content-Type": "application/json" },
    });

    socket.emit("sendMessage", newMessage);
    setMessage("");
    setReplyTo(null);
  };

  const deleteMessage = async (messageId: number) => {
    await fetch("/api/deleteMessage", {
      method: "DELETE",
      body: JSON.stringify({ messageId }),
      headers: { "Content-Type": "application/json" },
    });
    socket.emit("deleteMessage", messageId);
  };

  useEffect(() => {
    socket.on("newMessage", (data: Message) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("deleteMessage", (messageId: number) => {
      setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
    });
  }, []);

  const handleReply = (msg: Message) => {
    setReplyTo(msg);
  };

  return (
    <div className="p-6 bg-gray-900 text-white h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-center gap-4">
            <div>
              {msg.replyTo && (
                <p className="text-sm text-gray-400 mb-1">
                  Replying to: "{msg.replyTo}"
                </p>
              )}
              <p
                className="bg-gray-700 p-2 rounded cursor-pointer"
                onClick={() => handleReply(msg)}
              >
                {msg.message}
              </p>
            </div>
            <button 
              onClick={() => deleteMessage(msg.id)} 
              className="text-red-400"
            >
              ✖ Delete
            </button>
          </div>
        ))}
      </div>

      {replyTo && (
        <div className="mb-2 text-gray-400">
          Replying to: "{replyTo.message}"
          <button 
            onClick={() => setReplyTo(null)} 
            className="ml-2 text-red-500"
          >
            ✖ Cancel
          </button>
        </div>
      )}

      <div className="flex items-center gap-4">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 bg-gray-800 rounded"
        />
        <button onClick={sendMessage} className="px-4 py-2 bg-blue-500 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
*/}