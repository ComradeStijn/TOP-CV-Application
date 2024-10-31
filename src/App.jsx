import "./assets/reset.css";
import General from "./components/General";
import Education from "./components/Education";
import { useState } from "react";
import "./assets/layout.css";
import Experiences from "./components/Experience";
import Editor from "./components/Editor";

// Define layout of Application
export default function App() {
  const [editor, setEditor] = useState(false);

  const [personal, setPersonal] = useState({
    name: "Name",
    number: "0XXX-XX-XX-XX",
    mail: "first@last.com",
  });
  const [educations, setEducations] = useState([
    {
      id: 0,
      title: "MSc Lorem",
      subtitle: "Ipsum University",
      date: "202X-202X",
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
      id: 0,
      subtitle: "Dolor Inc",
      title: "Chief Sit Officer",
      date: "202X-202X",
    },
  ]);

  function toggleEditor() {
    setEditor(!editor);
  }

  function changeData(formData) {
    setPersonal(formData.personal);
    setEducations(formData.educations);
    setExperiences(formData.experiences);
    toggleEditor();
  }

  return (
    <div id="root-container">
      <button className="btn" onClick={toggleEditor}>
        Toggle Editor
      </button>

      {editor ? (
        <Editor
          personal={personal}
          educations={educations}
          experiences={experiences}
          handleSubmit={changeData}
        />
      ) : (
        <>
          <General {...personal} />
          <Education educations={educations} />
          <Experiences experiences={experiences} />
        </>
      )}
    </div>
  );
}
