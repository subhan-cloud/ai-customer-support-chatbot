import React from "react";
import Image from "next/image";

function ChatHeader() {
  return (
    <header className="flex w-full items-center gap-3 border-b border-slate-200 bg-white px-4 py-3">
      {/* Chatbot image with online dot */}
      <div className="relative shrink-0">
        <Image
          src="/bot.png"
          alt="Chat gpt logo"
          className="h-11 w-11 rounded-full object-cover"
          width={44}
          height={44}
        />
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
      </div>

      {/* Name and status */}
      <div className="min-w-0">
        <h1 className="truncate text-base font-semibold text-slate-900">
          AI Customer Support
        </h1>
        <p className="text-sm text-green-600">Online</p>
      </div>
    </header>
  );
}

export default ChatHeader;