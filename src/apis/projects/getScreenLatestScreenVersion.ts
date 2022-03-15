import { PROJECTS } from "../../constants/api";
import { apiManager } from "../../helpers/apiManager";
import { ScreenVersion } from "../../types/screenVersion";

export const getScreenLatestVersion = async (
  projectId: string,
  screenId: string
): Promise<ScreenVersion> => {
  const res = await apiManager(
    `${PROJECTS}/${projectId}/screens/${screenId}/versions/latest`
  );
  return await res.json();
};
