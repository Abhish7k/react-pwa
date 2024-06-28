import { useEffect, useRef } from "react";
import { GoPaperclip } from "react-icons/go";
import { VscSend } from "react-icons/vsc";

interface Sender {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
}

interface Chat {
  id: string;
  message: string;
  sender: Sender;
  time: string;
}

export default function ChatSection({ chats }: { chats: Chat[] }) {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom when chats update
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  console.log(chats);

  return (
    <div className="flex flex-col mt-5 pt-10 overflow-auto">
      {/* chats */}
      <div
        ref={chatContainerRef}
        className="overflow-auto no-scrollbar flex flex-col gap-5"
      >
        {chats?.map((chat, idx) => (
          <div key={idx} className="flex">
            {chat.sender.self ? (
              <div className="flex justify-end items-end">
                <h1 className="bg-[#1C63D5] text-white font-normal p-2 ml-12 text-sm rounded-l-xl rounded-tr-xl">
                  {chat.message}
                </h1>
              </div>
            ) : (
              <div className="flex gap-2">
                <img
                  src={chat.sender.image}
                  alt=""
                  className="rounded-full w-7 h-7"
                />
                <h1 className="bg-white text-[#606060] font-normal p-2 mr-5 text-sm rounded-r-xl rounded-bl-xl">
                  {chat.message}
                </h1>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* chatbox */}
      <div className="mt-10 mb-2 p-4 bg-white rounded-lg flex items-center">
        <input
          type="text"
          className="flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400 w-[75%] "
          placeholder="Type your message"
        />
        <div className="flex gap-4">
          <GoPaperclip className="w-5 h-5 cursor-pointer" />
          <VscSend className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
