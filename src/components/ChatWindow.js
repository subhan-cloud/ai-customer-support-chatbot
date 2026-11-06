import React from "react";
import ChatMessage from "./ChatMessage";

function ChatWindow() {
  return (
    <div className="flex flex-col gap-4">
      {/* AI message */}
      <ChatMessage
        message="Hello! How can I help you today?"
        sender="AI Assistant"
      />

      {/* Customer message */}
      <ChatMessage message="I want to check my order." sender="You" />
    </div>
  );
}

export default ChatWindow;