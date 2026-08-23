import FlyoutMenu from "./components/FlyoutMenu";
import './styles/global.css'
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/trevor-baker-portfolio">
      <FlyoutMenu />
      <main className="md:pl-56">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          {/* other routes */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
