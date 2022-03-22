import { PROJECTS } from "../../constants/api";
import { ApiManager } from "../../helpers/apiManager";
import { ScreenVersion } from "../../types/screenVersion";

export const getScreenLatestVersion = async (
  projectId: string,
  screenId: string
): Promise<ScreenVersion> => {
  const res = await ApiManager.getInstance().fetchApi(
    `${PROJECTS}/${projectId}/screens/${screenId}/versions/latest`
  );
  return await res.json();
};
