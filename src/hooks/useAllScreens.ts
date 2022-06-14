import { useQuery } from "react-query";
import { getAllScreens } from "../apis/projects/getAllScreens";

export const useAllScreens = (projectId: string, sectionId: string) => {
  return useQuery(["screens", sectionId], () =>
    getAllScreens(projectId, sectionId)
  );
};
