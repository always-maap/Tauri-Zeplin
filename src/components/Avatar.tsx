import { FC } from "react";

type Props = {
  name: string;
};

const Avatar: FC<Props> = (props) => {
  const { name } = props;

  return (
    <div className="w-[30px] h-[30px] rounded-full bg-amber-500 text-white flex justify-center items-center">
      {name[0].toUpperCase()}
    </div>
  );
};

export default Avatar;
