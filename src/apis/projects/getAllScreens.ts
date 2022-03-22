import { PROJECTS } from "../../constants/api";
import { ApiManager } from "../../helpers/apiManager";
import { Screen } from "../../types/screen";

export const getAllScreens = async (
  projectId: string,
  screenId: string
): Promise<Screen[]> => {
  const params = new URLSearchParams({ section_id: screenId });

  const res = await ApiManager.getInstance().fetchApi(
    `${PROJECTS}/${projectId}/screens?${params}`
  );
  return await res.json();
};
