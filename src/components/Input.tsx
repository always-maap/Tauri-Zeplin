import { FC, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = (props) => {
  const { ...rest } = props;
  return <input {...rest} />;
};

export default Input;
