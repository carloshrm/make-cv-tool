import { cloneElement, useEffect } from "react";
import "./styles/App.css";
import EducationInfo from "./components/EducationInfo";
import JobInfo from "./components/JobInfo";
import PersonalInfo from "./components/PersonalInfo";
import SkillsHobbies from "./components/SkillsHobbies";
import { jsPDF } from "jspdf";

function App() {
  function resetToDefault() {
    localStorage.clear();
    document.location.reload();
  }

  function saveCV() {
    let CV = document.getElementById("main_resume").cloneNode(true);
    // CV.id = "";
    // CV.style.width = "595px";

    const file = new jsPDF({
      format: "a4",
      unit: "pt",
    });
    window.scrollTo(0, 0);
    file.html(CV, {
      callback: function (file) {
        file.save();
      },
      filename: "test",
      html2canvas: {
        scale: 1,
        ignoreElements: (el) => el.className.includes("_inputField"),
      },
    });
  }

  return (
    <>
      <ul id="top_nav">
        <li onClick={saveCV}>Save</li>
        <li onClick={resetToDefault}>Clear</li>
      </ul>
      <div id="main_resume">
        <PersonalInfo />
        <EducationInfo />
        <JobInfo />
        <SkillsHobbies />
      </div>
      <div id="footer">
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default App;
