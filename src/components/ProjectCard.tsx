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
};

const ProjectCard: FC<Props> = (props) => {
  const { id, name, platform, thumbnail } = props;

  const encodedThumbnail = getThumbnailencoded(id, thumbnail);
  const options = new URLSearchParams({
    w: "270",
    cropTop: "0",
    cropLeft: "0",
    cropWidth: "270",
    cropHeight: "92",
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
            height={92}
            className="w-full"
          />
          <div className="p-2 m-2">
            <div className="flex uppercase text-amber-500">{platform}</div>
            <span className="text-xl font-bold text-slate-700">{name}</span>
          </div>
        </div>
      </WithHover>
    </Link>
  );
};

export default ProjectCard;
