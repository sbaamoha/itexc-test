const Message = ({
  msg,
  openThisMsg,
}: {
  msg: Message;
  openThisMsg: (msg: Message | null) => void;
}) => {
  const dateString = msg.date;
  const dateObj = new Date(dateString);

  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
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
