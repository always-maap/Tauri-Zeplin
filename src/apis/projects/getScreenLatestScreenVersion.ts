import { PROJECTS } from "../../constants/api";
import { ScreenVersion } from "../../types/screenVersion";

export const getScreenLatestVersion = async (
  projectId: string,
  screenId: string
): Promise<ScreenVersion> => {
  const res = await fetch(
    `${PROJECTS}/${projectId}/screens/${screenId}/versions/latest`
  );
  return await res.json();
};
