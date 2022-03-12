import { useQuery } from "react-query";
import { Link, Outlet, useParams } from "react-router-dom";
import { getScreenSections } from "../../apis/projects/getScrrenSections";

const Project = () => {
  const params = useParams();

  const { data: screenSections, status: screenSectionsStatus } = useQuery(
    ["project", params.projectId],
    () => getScreenSections(params.projectId)
  );

  if (screenSectionsStatus === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {screenSections?.map((screenSection) => (
        <Link to={`section/${screenSection.id}`} key={screenSection.id}>
          {screenSection.name}
        </Link>
      ))}

      <Outlet />
    </div>
  );
};

export default Project;
