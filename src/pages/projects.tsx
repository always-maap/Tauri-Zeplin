import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { getAllProjects } from "../apis/projects/getAllProjects";
import { getScreenSections } from "../apis/projects/getScreenSections";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { useHeader } from "../hooks/useHeader";

const Projects = () => {
  const queryClient = useQueryClient();
  const { setHeaderTitle, setPreviousPage } = useHeader();
  const { data, status } = useQuery(["projects"], getAllProjects, {
    onSuccess: (projects) => {
      projects.map((project) => {
        queryClient.prefetchQuery(["sections", project.id], () =>
          getScreenSections(project.id)
        );
      });
    },
  });

  useEffect(() => {
    setHeaderTitle("Workspace");
    setPreviousPage(undefined);
  }, []);

  if (status === "loading") {
    return <Container>Loading...</Container>;
  }

  if (status !== "success") {
    return <Container>Error</Container>;
  }

  return (
    <Container className="flex flex-wrap gap-6 py-4">
      {data.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id}>
          <ProjectCard
            id={project.id}
            name={project.name}
            platform={project.platform}
            thumbnail={project.thumbnail}
            updated={project.updated}
          />
        </Link>
      ))}
    </Container>
  );
};

export default Projects;
