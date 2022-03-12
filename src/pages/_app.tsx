import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./index";
import Project from "./project";
import Section from "./project/section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project">
          <Route path=":projectId" element={<Project />} />
          <Route path=":projectId/section/:sectionId" element={<Section />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
