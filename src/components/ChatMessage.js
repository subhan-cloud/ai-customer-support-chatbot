import React from "react";

function ChatMessage({ message, sender }) {

  const isUser = sender === "You";

  return (
    <div className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}>

      <div className="max-w-xs">

        <div className={`rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-blue-500 text-white rounded-tr-none"
            : "bg-gray-100 text-gray-800 rounded-tl-none"
        }`}>
          <p>{message}</p>
        </div>

        <p className={`mt-1 text-xs text-gray-500 ${
          isUser ? "text-right" : "text-left"
        }`}>
          {sender}
        </p>

      </div>
    </div>
  );
}

export default ChatMessage;