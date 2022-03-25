import { USERS_ME } from "../../constants/api";
import { CurrentUser } from "../../types/currentUser";

export const getCurrentUser = async (): Promise<CurrentUser> => {
  const res = await fetch(USERS_ME);
  return await res.json();
};
