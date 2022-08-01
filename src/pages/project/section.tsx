import { Link, useParams } from "react-router-dom";
import WithHover from "../../components/WithHover";
import { IMAGE_SERVER_URL } from "../../constants/api";
import { getSectionEncoded } from "../../helpers/zeplinCDN";
import { useAllScreens } from "../../hooks/useAllScreens";

const options = new URLSearchParams({
  w: "270",
});

const Screen = () => {
  const { projectId, sectionId } = useParams() as {
    projectId: string;
    sectionId: string;
  };
  const { isLoading, isSuccess, data } = useAllScreens(projectId, sectionId);

  if (isLoading || !isSuccess) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2">
      {data.map((screen) => (
        <div className="w-[240px]" key={screen.id}>
          <Link
            to={`/project/${projectId}/screen/${screen.id}`}
            key={screen.id}
          >
            <WithHover>
              <img
                loading="lazy"
                src={`${IMAGE_SERVER_URL}/${getSectionEncoded(
                  screen.image.original_url
                )}?${options}`}
                className="border-2 border-slate-200 object-cover object-top max-h-[520px]"
                width={240}
                height={(240 * screen.image.height) / screen.image.width}
              />
            </WithHover>
          </Link>
          <span className="text-sm text-slate-700">{screen.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Screen;
