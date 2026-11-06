import ChatHeader from "../components/ChatHeader";
import WelcomeMessage from "../components/WelcomeMessage";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-3xl rounded-xl bg-white shadow-sm">
        <ChatHeader />

        <div className="p-6">
          <WelcomeMessage />
          <ChatWindow />

          <div className="mt-6">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
}