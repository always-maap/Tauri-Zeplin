import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getAllScreens } from "../../apis/projects/getAllScreens";
import WithHover from "../../components/WithHover";

const Screen = () => {
  const { projectId, sectionId } = useParams();
  const { data, status } = useQuery(["screen", sectionId], () =>
    getAllScreens(projectId, sectionId)
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
      {data?.map((screen) => (
        <Link to="/" key={screen.id}>
          <div style={{ width: 240 }}>
            <WithHover>
              <img
                loading="lazy"
                src={screen.image.thumbnails.small}
                className="border-2 border-slate-200 object-cover object-top"
                width={240}
                height={(240 * screen.image.height) / screen.image.width}
                style={{ maxHeight: 520 }}
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
