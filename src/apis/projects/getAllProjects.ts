import { PROJECTS } from "../../constants/api";
import { apiManager } from "../../helpers/apiManager";
import { Project } from "../../types/project";

export const getAllProjects = async (): Promise<Project[]> => {
  const res = await apiManager(PROJECTS);
  return await res.json();
};
