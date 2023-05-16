import { useQuery } from "@tanstack/react-query";
import { useState, useMemo, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../lib/apis";
import { setMessages } from "../../utils/redux/slices/messagesSlice";
import { RootState } from "src/utils/redux/store";
import Message from "./Message";
import { RiSendPlaneFill } from "react-icons/ri";

const MessagesContent = () => {
  const messages = useSelector((state: RootState) => state.messages.messages);
  const [search, setSearch] = useState<string>();
  const [msgOpened, setMsgOpened] = useState<Message | null>(messages[0]);
  const dispatch = useDispatch();

  const setMsgOpenedHandler = (msg: Message | null) => {
    setMsgOpened(msg);
  };

  const searchMessages = useMemo(() => {
    if (!search) return messages;
    return messages.filter((a) =>
      a.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, messages]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
  });
  useEffect(() => {
    if (data) {
      dispatch(setMessages(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>error has occured </div>;
  return (
    <div className="capitalize">
      <div className="flex">
        <div>
          <h2 className="w-1/2 text-2xl my-3 text-softBlue">messages</h2>
          <div className="flex flex-col relative">
            <div>
              <CiSearch className="absolute left-5 top-3 text-2xl opacity-80" />
              <input
                className="w-full rounded-lg py-3 px-12 outline-none border mr-6"
                placeholder="Search for something"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="border-r my-2">
              {searchMessages.map((msg) => {
                return (
                  <Message
                    key={msg.id}
                    msg={msg}
                    openThisMsg={setMsgOpenedHandler}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="hidden md:flex-1 mx-2">
          <div className="flex justify-between items-center border-b pb-6 px-2">
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
          <div className="my-3">
            <div>
              <h3 className="text-center text-softBlue">
                {msgOpened?.date.split("T")[0]}
              </h3>
              <div className="flex items-center gap-2">
                <img
                  className="w-[50px] rounded-full "
                  src={msgOpened?.avatar}
                  alt={msgOpened?.name}
                />
                <div className="p-6 rounded-b-lg rounded-tr-lg bg-gray-100">
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci temporibus optio vol dicta!
                  </p>
                </div>
              </div>
              <span className="ml-16">12:48 PM</span>
            </div>
            <div>
              <div className="w-1/2 ml-auto bg-blue p-6 rounded-t-lg rounded-bl-lg text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                quisquam molestiae obcaecati ullam dolores nihil ad sed
                aspernatur blanditiis architecto.
              </div>
              <div className="absolute right-7">12:51 PM</div>
            </div>
            <div className="my-6">
              <div className="flex items-center gap-2">
                <img
                  className="w-[50px] rounded-full "
                  src={msgOpened?.avatar}
                  alt={msgOpened?.name}
                />
                <div className="p-6 rounded-b-lg rounded-tr-lg bg-gray-100">
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci temporibus optio vol dicta!
                  </p>
                </div>
              </div>
              <span className="ml-16">12:55 PM</span>
            </div>
          </div>
          <div className="border-t py-6 ">
            <div className="flex items-center w-full">
              <input
                className="w-full rounded-lg py-3 px-12 outline-none border mr-6"
                placeholder="Write something here"
                type="text"
              />
              <RiSendPlaneFill className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesContent;
