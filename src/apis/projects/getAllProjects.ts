import { PROJECTS } from "../../constants/api";
import { Project } from "../../types/project";

export const getAllProjects = async (): Promise<Project[]> => {
  const res = await fetch(PROJECTS);
  return await res.json();
};
