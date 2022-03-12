import { PROJECTS } from "../../constants/api";
import { apiManager } from "../../helpers/apiManager";
import { ScreenSection } from "../../types/screenSection";

export const getScreenSections = async (
  projectId: string
): Promise<ScreenSection[]> => {
  const res = await apiManager(`${PROJECTS}/${projectId}/screen_sections`);
  return await res.json();
};
