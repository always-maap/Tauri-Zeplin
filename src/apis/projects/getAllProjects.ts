import { PROJECTS } from "../../constants/api";
import { ApiManager } from "../../helpers/apiManager";
import { Project } from "../../types/project";

export const getAllProjects = async (): Promise<Project[]> => {
  const res = await ApiManager.getInstance().fetchApi(PROJECTS);
  return await res.json();
};
