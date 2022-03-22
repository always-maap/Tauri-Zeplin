import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getAllScreens } from "../../apis/projects/getAllScreens";
import WithHover from "../../components/WithHover";

const Screen = () => {
  const { projectId, sectionId } = useParams() as {
    projectId: string;
    sectionId: string;
  };
  const { data, status } = useQuery(["screens", sectionId], () =>
    getAllScreens(projectId, sectionId)
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2">
      {data?.map((screen) => (
        <Link to={`/project/${projectId}/screen/${screen.id}`} key={screen.id}>
          <div className="w-[240]">
            <WithHover>
              <img
                loading="lazy"
                src={screen.image.thumbnails.small}
                className="border-2 border-slate-200 object-cover object-top max-h-[520px]"
                width={240}
                height={(240 * screen.image.height) / screen.image.width}
              />
            </WithHover>
            <span className="text-sm text-slate-700">{screen.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Screen;
