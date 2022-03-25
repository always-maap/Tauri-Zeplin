import { FormEvent, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import accessTokenHelp from "../assets/accessTokenHelp.png";
import { useHeader } from "../hooks/useHeader";
import { Navigate, useNavigate } from "react-router-dom";
import { getAccessToken } from "../helpers/getAccessToken";
import "../helpers/apiManager";

const Home = () => {
  const { setHeaderTitle } = useHeader();
  const navigate = useNavigate();

  if (getAccessToken()) {
    return <Navigate to="/projects" />;
  }

  useEffect(() => {
    setHeaderTitle("Welcome");
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    const accessToken = formData.get("accessToken");

    if (accessToken) {
      window.localStorage.setItem("accessToken", accessToken.toString());

      // TODO: ensure that the access token is valid

      navigate("/projects");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4 gap-4">
      <h1>This is an unoffial client of zeplin</h1>
      <h3>This is an unoffial client of zeplin</h3>
      <img width={400} src={accessTokenHelp} />
      <form onSubmit={onSubmit} className="flex items-center gap-4">
        <label>
          Access Token
          <Input
            className="ml-4"
            name="accessToken"
            placeholder="Enter your accessToken"
          />
        </label>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Home;
