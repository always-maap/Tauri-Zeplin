import { useQuery } from "react-query";
import { getAllProjects } from "../apis/projects/getAllProjects";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const { data, status } = useQuery(["projects"], getAllProjects, {
    refetchOnWindowFocus: false,
  });

  if (status === "loading") {
    return <Container>Loading...</Container>;
  }

  return (
    <Container className=" flex flex-wrap gap-6">
      {data?.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          platform={project.platform}
          thumbnail={project.thumbnail}
        />
      ))}
    </Container>
  );
};

export default Home;
