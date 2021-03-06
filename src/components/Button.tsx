import { FC } from "react";

type Props = {
  isActive?: boolean;
};

const Button: FC<Props> = (props) => {
  const { isActive = false, children, ...rest } = props;

  return (
    <button
      className={`text-sm border-2 border-amber-500  rounded-full py-1 px-3 ${
        isActive ? "bg-amber-500 text-white" : "text-slate-500"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
