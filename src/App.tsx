import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios, { AxiosResponse } from "axios";
import ChatSection from "./components/ChatSection";

export default function App() {
  const [data, setData] = useState<AxiosResponse | null>(null);

  const fetchData = async () => {
    const res = await axios.get("https://qa.corider.in/assignment/chat?page=0");

    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen w-screen px-10 py-5 bg-[#FAF9F4] mx-auto flex flex-col justify-between">
      <Header
        name={data?.data.name}
        from={data?.data.from}
        to={data?.data.to}
      />

      <ChatSection chats={data?.data.chats} />
    </div>
  );
}
