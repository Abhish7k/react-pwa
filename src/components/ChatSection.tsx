import { useEffect, useRef, useState } from "react";
import { FiVideo } from "react-icons/fi";
import { GoPaperclip } from "react-icons/go";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { LuCamera } from "react-icons/lu";
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
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Scroll to the bottom when chats update
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  console.log(chats);

  return (
    <div className="flex flex-col pt-10 overflow-auto">
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
                  alt="profile"
                  className="rounded-full w-10 h-10"
                />
                <div className="bg-white text-[#606060] font-normal p-2 mr-5 text-sm rounded-r-xl rounded-bl-xl">
                  {chat.message}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* chatbox */}
      <div className="relative mt-10 mb-2 p-4 bg-white rounded-lg flex items-center">
        <div className="absolute bottom-10 right-0 mb-2 rounded-full p-2 flex space-x-4">
          {showMenu && (
            <div className="z-10  flex flex-col bg-[#008000] text-white rounded-full px-4 py-3">
              <div className="flex items-center gap-3">
                <LuCamera className="w-5 h-5" />
                <FiVideo className="w-5 h-5" />
                <HiOutlineDocumentDownload className="w-5 h-5" />
              </div>
            </div>
          )}
        </div>
        <input
          type="text"
          className="flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400 w-[75%] "
          placeholder="Reply to @Rohit Yadav"
        />
        <div className="flex gap-4">
          <button onClick={() => setShowMenu(!showMenu)}>
            <GoPaperclip className="w-5 h-5 cursor-pointer" />
          </button>
          <button>
            <VscSend className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
