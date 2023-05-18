interface TAvatar {
  img: string | undefined;
  name: string | undefined;
  desc: string | undefined;
}

const Avatar = ({ img, name, desc }: TAvatar) => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-full  "
        src={img}
        alt={name}
      />
      <div>
        <h2 className="text-sm">{name} </h2>
        <p className="text-main text-sm">{desc} </p>
      </div>
    </div>
  );
};

export default Avatar;
