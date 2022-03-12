import { useQuery } from "react-query";
import { Link, Outlet, useParams } from "react-router-dom";
import { getScreenSections } from "../../apis/projects/getScrrenSections";
import Container from "../../components/Container";

const Project = () => {
  const params = useParams();

  const { data: screenSections, status: screenSectionsStatus } = useQuery(
    ["project", params.projectId],
    () => getScreenSections(params.projectId)
  );

  if (screenSectionsStatus === "loading") {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      {screenSections?.map((screenSection) => (
        <Link to={`section/${screenSection.id}`} key={screenSection.id}>
          {screenSection.name}
        </Link>
      ))}

      <Outlet />
    </Container>
  );
};

export default Project;
