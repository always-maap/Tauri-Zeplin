import { useQuery } from "react-query";
import { getScreenSections } from "../apis/projects/getScreenSections";

export const useScreenSections = (projectId: string) => {
  return useQuery(["sections", projectId], () => getScreenSections(projectId));
};
