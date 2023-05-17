import { useQuery } from "@tanstack/react-query";
import { useState, useMemo, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../lib/apis";
import { setMessages } from "../../utils/redux/slices/messagesSlice";
import { RootState } from "src/utils/redux/store";
import Message from "./Message";
import Conversation from "./Conversation";

const MessagesContent = () => {
  const dispatch = useDispatch();
  const msgs = useSelector((state: RootState) => state.messages.messages);

  const [search, setSearch] = useState<string>();
  const [msgOpened, setMsgOpened] = useState<Message>(msgs[0]);

  const setMsgOpenedHandler = (msg: Message) => {
    setMsgOpened(msg);
  };

  const searchMessages = useMemo(() => {
    if (!search) return msgs;
    return msgs.filter((a) =>
      a.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, msgs]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
  });
  useEffect(() => {
    if (data) {
      dispatch(setMessages(data));
      setMsgOpened(msgs[0]);
    }
  }, [data, dispatch, msgs]);

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>error has occured </div>;
  return (
    <div className="capitalize">
      <div className="flex">
        <div>
          <h2 className="w-1/2 text-lg md:text-2xl my-3 text-softBlue">
            messages
          </h2>
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

        <Conversation msgOpened={msgOpened} />
      </div>
    </div>
  );
};

export default MessagesContent;
