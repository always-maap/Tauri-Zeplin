import { useQuery, useQueryClient } from "react-query";
import { getAllProjects } from "../apis/projects/getAllProjects";
import { getScreenSections } from "../apis/projects/getScreenSections";

export const useAllProjects = () => {
  const queryClient = useQueryClient();
  return useQuery(["projects"], getAllProjects, {
    onSuccess: (projects) => {
      projects.map((project) => {
        queryClient.prefetchQuery(["sections", project.id], () =>
          getScreenSections(project.id)
        );
      });
    },
  });
};
