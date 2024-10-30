import "./assets/reset.css";
import General from "./components/General";
import Education from "./components/Education";
import { useState } from "react";
import "./assets/layout.css";
import Experiences from "./components/Experience";

// Define layout of Application
export default function App() {
  const [personal, setPersonal] = useState({
    name: "Stijn Servaes",
    number: "0283726",
    mail: "yolo@servaesia.com",
  });
  const [educations, setEducations] = useState([
    { id: 0, title: "MSc test", subtitle: "Test University", date: "2022-202X" },
    { id: 1, title: "MSc test", subtitle: "Test University", date: "2022-202X" },
  ]);
  const [experiences, setExperiences] = useState([
    {
      id: 0,
      subtitle: "Test Inc",
      title: "Chief Test Officer",
      date: "2022-202X",
    },
    {
      id: 0,
      subtitle: "Test Inc",
      title: "Chief Test Officer",
      date: "2022-202X",
    },
  ]);

  return (
    <div id="root-container">
      <aside id="main-editor"></aside>
      <main id="main-cv">
        <General {...personal} />
        <Education educations={educations} />
        <Experiences experiences={experiences} />
      </main>
    </div>
  );
}
