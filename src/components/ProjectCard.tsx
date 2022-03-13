import dayjs from "dayjs";
import { FC } from "react";
import { Link } from "react-router-dom";
import { IMAGE_SERVER_URL } from "../constants/api";
import { getThumbnailencoded } from "../helpers/normalizeThumbnail";
import { Project } from "../types/project";
import WithHover from "./WithHover";

type Props = {
  id: Project["id"];
  name: Project["name"];
  platform: Project["platform"];
  thumbnail: Project["thumbnail"];
  updated: Project["updated"];
};

const ProjectCard: FC<Props> = (props) => {
  const { id, name, platform, thumbnail, updated } = props;

  const encodedThumbnail = getThumbnailencoded(id, thumbnail);
  const options = new URLSearchParams({
    w: "270",
    cropTop: "0",
    cropLeft: "0",
    cropWidth: "270",
    cropHeight: "130",
  });

  return (
    <Link to={`project/${id}`}>
      <WithHover>
        <div
          className="text-slate-900 border-2 border-slate-200 rounded"
          style={{ width: 272, height: 215 }}
        >
          <img
            src={`${IMAGE_SERVER_URL}/${encodedThumbnail}?${options}`}
            width={272}
            height={130}
            className="w-full"
          />
          <div className="p-2 m-2">
            <div className="flex justify-between">
              <span className="uppercase text-amber-500">{platform}</span>
              <span className="text-slate-400">
                {dayjs.unix(updated).fromNow(true)}
              </span>
            </div>
            <span className="text-xl font-bold text-slate-700">{name}</span>
          </div>
        </div>
      </WithHover>
    </Link>
  );
};

export default ProjectCard;
