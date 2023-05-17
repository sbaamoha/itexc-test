import { dateExtract } from "../../lib/date";

const Message = ({
  msg,
  openThisMsg,
}: {
  msg: Message;
  openThisMsg: (msg: Message) => void;
}) => {
  const { ampm, hours, minutes } = dateExtract(msg.date);
  return (
    <div
      onClick={() => openThisMsg(msg)}
      className="flex flex-col cursor-pointer"
    >
      <div className="flex items-center gap-3 p-2 rounded-lg">
        <img
          className="w-[55px] rounded-full "
          src={msg.avatar}
          alt={msg.name}
        />{" "}
        <div>
          <h2 className="text-xl">{msg.name} </h2>
          <p className="text-lg text-main">{msg.message}</p>
        </div>
        <div className="flex flex-1 justify-end">
          <p>
            {hours}:{minutes} {ampm}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
