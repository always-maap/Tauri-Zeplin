import { useQuery } from "react-query";
import { getCurrentUser } from "../apis/users/getCurrentUser";
import { getAccessToken } from "../helpers/getAccessToken";

export const useIAM = () => {
  return useQuery(["me"], getCurrentUser, {
    enabled: !!getAccessToken(),
  });
};
