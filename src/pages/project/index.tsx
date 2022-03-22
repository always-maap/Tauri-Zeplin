import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link, Outlet, useParams } from "react-router-dom";
import { getScreenSections } from "../../apis/projects/getScreenSections";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { useHeader } from "../../hooks/useHeader";

const Project = () => {
  const { setHeaderTitle, setPreviousPage } = useHeader();
  const params = useParams() as { projectId: string; sectionId: string };

  const { data: screenSections, status: screenSectionsStatus } = useQuery(
    ["sections", params.projectId],
    () => getScreenSections(params.projectId)
  );

  useEffect(() => {
    setHeaderTitle("Select a section");
    setPreviousPage({ title: "Workspace", url: "/" });
  }, []);

  if (screenSectionsStatus === "loading") {
    return <Container>Loading...</Container>;
  }

  const onClick = (name: string) => {
    setHeaderTitle(name);
    setPreviousPage({ title: "Workspace", url: "/" });
  };

  return (
    <Container>
      <div className="sticky top-[52px] z-10 bg-white flex gap-4 pb-4 pt-2 mb-2 overflow-x-auto no-scrollbar whitespace-nowrap">
        {screenSections?.map((screenSection) => (
          <Link
            onClick={() => onClick(screenSection.name)}
            to={`section/${screenSection.id}`}
            key={screenSection.id}
          >
            <Button isActive={screenSection.id === params.sectionId}>
              {screenSection.name}
            </Button>
          </Link>
        ))}
      </div>
      <Outlet />
    </Container>
  );
};

export default Project;
