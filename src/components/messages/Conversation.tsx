import React, { useEffect, useRef, useState } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";

interface TConversation {
  msgOpened: Message | null;
}
interface NewMessage {
  text: string;
  sender: string;
}

const Conversation = ({ msgOpened }: TConversation) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const [messages, setMessagesComponent] = useState<NewMessage[]>([
    {
      text: "hello",
      sender: "friend",
    },
    {
      text: "hello there",
      sender: "me",
    },
    {
      text: "how are you today!",
      sender: "me",
    },
    {
      text: "im good and you ?",
      sender: "friend",
    },
    {
      text: "...",
      sender: "friend",
    },
  ]);

  const [newMessage, setNewMessage] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessages: NewMessage[] = [
        ...messages,
        { text: newMessage, sender: "me" },
      ];
      setMessagesComponent(newMessages);
      setNewMessage("");
    }
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="hidden md:flex flex-col flex-1 mx-2">
      <div className="flex justify-between items-center pb-6 px-2 border-b">
        <div className="flex items-center gap-3">
          <img
            className="w-[50px] rounded-full "
            src={msgOpened?.avatar}
            alt=""
          />
          <div>
            <h2 className="text-lg">{msgOpened?.name}</h2>
            <p className="text-main">contanct</p>
          </div>
        </div>
        <div className="flex gap-2 text-2xl">
          <HiOutlineVideoCamera className="cursor-pointer" />
          <SlOptions className="cursor-pointer" />
        </div>
      </div>
      <div className="p-2">
        <div
          className="flex flex-col h-[60vh] space-y-4 overflow-y-auto"
          ref={messagesContainerRef}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`h-[10vh] flex justify-${
                message.sender === "me" ? "end" : "start"
              }`}
            >
              {message.sender !== "me" && (
                <img
                  className="w-[40px] h-[40px] rounded-full mx-2"
                  src={msgOpened?.avatar}
                  alt="profile pct"
                />
              )}
              <div
                className={`bg-${
                  message.sender === "me" ? "blue" : "gray-100"
                } text-white rounded-lg p-4 shadow`}
              >
                <p
                  className={`text-${
                    message.sender === "me" ? "white" : "gray-800"
                  }`}
                >
                  {message.text}
                </p>
                <p
                  className={`text-${
                    message.sender === "me" ? "white" : "gray-800"
                  }`}
                >
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-12">
          <input
            type="text"
            value={newMessage}
            onChange={handleInputChange}
            className="border rounded-lg p-2 flex-grow outline-none text-gray-800"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue text-white rounded-lg px-4 py-2 ml-2"
          >
            <RiSendPlaneFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
