import { PROJECTS } from "../../constants/api";
import { ApiManager } from "../../helpers/apiManager";
import { ScreenSection } from "../../types/screenSection";

export const getScreenSections = async (
  projectId: string,
  screenId: string
): Promise<ScreenSection[]> => {
  const res = await ApiManager.getInstance().fetchApi(
    `${PROJECTS}/${projectId}/screen_sections/${screenId}`
  );
  return await res.json();
};
