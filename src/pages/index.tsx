import { useQuery } from "react-query";
import { getAllProjects } from "../apis/projects/getAllProjects";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const { data, status } = useQuery(["projects"], getAllProjects, {
    refetchOnWindowFocus: false,
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 flex flex-wrap gap-6">
      {data?.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          platform={project.platform}
          thumbnail={project.thumbnail}
        />
      ))}
    </div>
  );
};

export default Home;
