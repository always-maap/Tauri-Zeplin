import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getAllScreens } from "../../apis/projects/getAllScreens";

const Screen = () => {
  const { projectId, sectionId } = useParams();
  const { data, status } = useQuery(["screen", sectionId], () =>
    getAllScreens(projectId, sectionId)
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((screen) => (
        <img
          src={screen.image.thumbnails.small}
          style={{ aspectRatio: screen.image.width / screen.image.height }}
        />
      ))}
    </div>
  );
};

export default Screen;
