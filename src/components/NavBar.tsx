import { FC } from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../constants/api";
import { useHeader } from "../hooks/useHeader";
import LeftArrow from "../assets/LeftArrow";
import Avatar from "./Avatar";
import { useIAM } from "../hooks/useIAM";

type Props = {};

const NavBar: FC<Props> = () => {
  const { title, previosPage } = useHeader();
  const { data, isSuccess } = useIAM();
  return (
    <header className="flex justify-between items-center px-2 bg-gray-50 border-b-2 border-slate-100 sticky top-0 z-10 h-[52px]">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            className="w-[36px]"
            src={`${CDN_URL}/assets/webapp/img/icZeplin.svg`}
          />
        </Link>
        {previosPage && (
          <Link
            to={previosPage.url}
            className="flex items-center gap-2 fill-amber-500 text-amber-500 hover:text-amber-300"
          >
            <LeftArrow />
            {previosPage.title}
          </Link>
        )}
      </div>
      <span className="text-slate-500">{title}</span>

      {isSuccess ? <Avatar name={data.username} /> : <span />}
    </header>
  );
};

export default NavBar;
