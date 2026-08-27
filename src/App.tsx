import FlyoutMenu from "./components/FlyoutMenu";
import './styles/global.css'
import About from "./pages/About";
import Projects from "./pages/Projects"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Experience from "./pages/Experience";
import Credentials from "./pages/Credentials";
import Skills from "./pages/Skills";
import ProjectDetail from "./pages/ProjectDetail"; 

function App() {
  return (
    <HashRouter>  {/* ← Use HashRouter */}
      <FlyoutMenu />
      <main className="md:pl-56">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="/credentials" element={<Credentials/>}/> 
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App