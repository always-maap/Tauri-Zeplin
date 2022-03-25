import { PROJECTS } from "../../constants/api";
import { ScreenSection } from "../../types/screenSection";

export const getScreenSections = async (
  projectId: string,
  screenId: string
): Promise<ScreenSection[]> => {
  const res = await fetch(
    `${PROJECTS}/${projectId}/screen_sections/${screenId}`
  );
  return await res.json();
};
