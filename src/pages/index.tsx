import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAllProjects } from "../apis/projects/getAllProjects";

const Home = () => {
  const { data, status } = useQuery(["projects"], getAllProjects, {
    refetchOnWindowFocus: false,
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((project) => (
        <Link to={`project/${project.id}`}>
          <div
            key={project.id}
            style={{ width: 270, height: 92, objectFit: "cover" }}
          >
            {project.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
