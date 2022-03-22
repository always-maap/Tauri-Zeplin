import { USERS_ME } from "../../constants/api";
import { ApiManager } from "../../helpers/apiManager";
import { CurrentUser } from "../../types/currentUser";

export const getCurrentUser = async (): Promise<CurrentUser> => {
  const res = await ApiManager.getInstance().fetchApi(USERS_ME);
  return await res.json();
};
