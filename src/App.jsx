import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import ResearchPage from "./pages/ResearchPage";
import Build from "./pages/Build";
import LifePage from "./pages/LifePage";
import ContactPage from "./pages/ContactPage";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/build" element={<Build />} />
        <Route path="/life" element={<LifePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;