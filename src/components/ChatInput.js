"use client";
import React, { useState } from "react";

function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="button"
        onClick={() => alert("Button clicked!")}
        className="rounded-full bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;