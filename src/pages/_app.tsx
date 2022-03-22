import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./index";
import Projects from "./projects";
import Project from "./project";
import Section from "./project/section";
import Screen from "./project/screen";
import NotFound from "./404";
import RequireAuth from "../components/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/project">
          <Route
            path=":projectId"
            element={
              <RequireAuth>
                <Project />
              </RequireAuth>
            }
          >
            <Route
              path="section/:sectionId"
              element={
                <RequireAuth>
                  <Section />
                </RequireAuth>
              }
            />
          </Route>
        </Route>
        <Route
          path="/project/:projectId/screen/:screenId"
          element={
            <RequireAuth>
              <Screen />
            </RequireAuth>
          }
        />
        <Route
          path="/projects"
          element={
            <RequireAuth>
              <Projects />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
