import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./index";
import Project from "./project";
import Section from "./project/section";
import Screen from "./project/screen";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/project">
          <Route path=":projectId" element={<Project />}>
            <Route path="section/:sectionId" element={<Section />} />
          </Route>
        </Route>
        <Route
          path="/project/:projectId/screen/:screenId"
          element={<Screen />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
