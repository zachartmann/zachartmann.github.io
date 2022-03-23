import AboutMePage from "./components/AboutMePage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ResumePage from "./components/ResumePage";
import SkillsetPage from "./components/SkillsetPage";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

import { Route, Routes } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation
        pages={["Home", "About Me", "Skillset", "Resume", "Contact Info"]}
      />

      <Routes>
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/skills" element={<SkillsetPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
