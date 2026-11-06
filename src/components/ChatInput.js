"use client";

import React, { useState } from "react";

function ChatInput({ onSend, isLoading }) {
  const [message, setMessage] = useState("");

  function handleSend() {
  if (!message.trim()) return;

  onSend(message);
  setMessage("");
}

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Type your message..."
        disabled={isLoading}
        className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-gray-800"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
    if (e.key === "enter") {
      handleSend();
    }
  }}
      />

      <button
        type="button"
        onClick={handleSend}
        disabled={isLoading}
        className="rounded-full bg-blue-600 px-5 py-2 text-white"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;