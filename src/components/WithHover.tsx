import { FC } from "react";

const WithHover: FC = (props) => {
  const { children } = props;

  return (
    <div className="relative">
      <div className="absolute w-full h-full hover:bg-blue-300/20 hover:border-2 hover:border-blue-300" />
      {children}
    </div>
  );
};

export default WithHover;
