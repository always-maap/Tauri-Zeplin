import { FC, Fragment } from "react";
import { Navigate } from "react-router-dom";
import { getAccessToken } from "../helpers/getAccessToken";

const RequireAuth: FC = (props) => {
  const { children } = props;

  if (!getAccessToken()) {
    return <Navigate to="/" />;
  }

  return <Fragment>{children}</Fragment>;
};

export default RequireAuth;
