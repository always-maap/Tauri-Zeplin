import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { useAllProjects } from "../hooks/useAllProjects";
import { useHeader } from "../hooks/useHeader";

const Projects = () => {
  const { setHeaderTitle, setPreviousPage } = useHeader();
  const { status, data } = useAllProjects();

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
