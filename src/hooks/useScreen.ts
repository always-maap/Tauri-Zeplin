import { useQuery } from "react-query";
import { getScreenLatestVersion } from "../apis/projects/getScreenLatestScreenVersion";

export const useScreen = (projectId: string, screenId: string) => {
  return useQuery(["screen", screenId], () =>
    getScreenLatestVersion(projectId, screenId)
  );
};
