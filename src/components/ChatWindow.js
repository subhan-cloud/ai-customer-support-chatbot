"use client";

import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      message: "Hello! How can I help you today?",
      sender: "AI Assistant",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  async function handleSendMessage(text) {
  if (!text.trim()) return;

  setMessages((previousMessages) => [
    ...previousMessages,
    {
      message: text,
      sender: "You",
    },
  ]);
  
  setIsLoading(true);
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        message: data.reply,
        sender: "AI Assistant",
      },
    ]);
  } catch (error) {
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        message: "Sorry, something went wrong. Please try again.",
        sender: "AI Assistant",
      },
    ]);
  }finally {
   setIsLoading(false);
}
}

  return (
    <div className="flex flex-col gap-4">

      {messages.map((item, index) => (
      <ChatMessage
        key={index}
        message={item.message}
        sender={item.sender}
      />
    ))}

    {isLoading && (
  <p className="text-sm text-gray-500">
    AI is typing...
  </p>
)}
    
      <ChatInput
  onSend={handleSendMessage}
  isLoading={isLoading}
/>
    </div>
  );
}

export default ChatWindow;