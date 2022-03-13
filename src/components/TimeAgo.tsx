import dayjs from "dayjs";
import { FC } from "react";

type Props = {
  date: number;
};

const TimeAgo: FC<Props> = (props) => {
  const { date } = props;

  return (
    <span className="text-slate-400">{dayjs.unix(date).fromNow(true)}</span>
  );
};

export default TimeAgo;
