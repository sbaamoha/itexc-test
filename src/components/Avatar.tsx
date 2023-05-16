const Avatar = ({
  img,
  name,
  desc,
}: {
  img: string;
  name: string;
  desc: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <img className="w-[30px] h-[30px] rounded-full  " src={img} alt={name} />
      <div>
        <h2 className="text-sm">{name} </h2>
        <p className="text-main text-sm">{desc} </p>
      </div>
    </div>
  );
};

export default Avatar;
