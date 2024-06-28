import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit, FiUsers } from "react-icons/fi";
import { IoArrowBackOutline, IoCallOutline } from "react-icons/io5";
import { TbMessageReport } from "react-icons/tb";

type Props = {
  name: string;
  from: string;
  to: string;
};

const ThreeDotOptions = [
  {
    title: "Members",
    icon: FiUsers,
  },
  {
    title: "Share Number",
    icon: IoCallOutline,
  },
  {
    title: "Report",
    icon: TbMessageReport,
  },
];

const ChatScreen = ({ name, from, to }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* Topbar */}
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-4">
          {/* back icon */}
          <button>
            <IoArrowBackOutline className="w-6 h-6" />
          </button>

          {/* label */}
          <div className="text-2xl text-[#141E0D] font-bold">{name}</div>
        </div>

        {/* edit icon */}
        <button className="flex items-center">
          <FiEdit className="w-5 h-5" />
        </button>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-4">
          {/* photo */}
          <div className="bg-blue-200 h-12 w-12 my-auto rounded-full"></div>

          {/* text */}
          <div className="flex flex-col items-start">
            <div className="flex gap-2 items-end">
              <h1 className="font-medium">
                <span className="text-sm font-normal text-[#606060]">From</span>{" "}
                {from}
              </h1>
            </div>
            <div className="flex gap-2 items-end">
              <h1 className="font-medium">
                <span className="text-sm font-normal text-[#606060]">To</span>{" "}
                {to}
              </h1>
            </div>
          </div>
        </div>

        {/* three dots */}
        <div className="flex flex-col items-center">
          <button onClick={() => setShowMenu(!showMenu)}>
            <BsThreeDotsVertical />
          </button>

          {showMenu && (
            <div className="flex flex-col bg-white absolute mt-8 mr-32 p-4 rounded-lg shadow justify-start gap-4 z-10 w-40">
              {ThreeDotOptions.map((option, idx) => (
                <div key={idx} className="flex items-center gap-x-2 text-start">
                  <option.icon className="w-5 h-5" />
                  <h1 className="text-sm">{option.title}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
