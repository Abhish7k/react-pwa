import { GoPaperclip } from "react-icons/go";
import { VscSend } from "react-icons/vsc";

export default function ChatSection({ chats }: { chats: Array<object> }) {
  console.log(chats);

  return (
    <div className="flex flex-col mt-5 pt-10">
      {/* chats */}
      <div>chats</div>

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
