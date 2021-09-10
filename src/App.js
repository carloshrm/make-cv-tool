import "./styles/App.css";
import EducationInfo from "./components/EducationInfo";
import JobInfo from "./components/JobInfo";
import PersonalInfo from "./components/PersonalInfo";
import SkillsHobbies from "./components/SkillsHobbies";
import { jsPDF } from "jspdf";
import SVGicon from "@material-ui/core/Icon";

function App() {
  function resetToDefault() {
    localStorage.clear();
    document.location.reload();
  }

  function saveCV() {
    window.scrollTo(0, 0);
    let CV = document.getElementById("main_resume").cloneNode(true);

    CV.id = "";
    CV.style.width = "600px";

    const file = new jsPDF({
      format: "a4",
      unit: "pt",
    });
    file.html(CV, {
      callback: function (file) {
        file.save();
      },
      filename: "CV",
      html2canvas: {
        scale: 1,
        ignoreElements: (el) => el.className.includes("_inputField"),
      },
    });
  }

  return (
    <>
      <ul id="top_nav">
        <li onClick={saveCV}>
          <SVGicon>save</SVGicon> Save
        </li>
        <li onClick={resetToDefault}>
          <SVGicon>clearall</SVGicon> Clear
        </li>
      </ul>
      <div id="instructions">
        <h3>Instructions</h3>
        <h4>
          Click on each field to fill it in. You can click the text afterwards to edit any fields.
          The save button outputs a pdf file, and the clear button resets the entire page.
        </h4>
      </div>
      <div id="main_resume">
        <PersonalInfo />
        <EducationInfo />
        <JobInfo />
        <SkillsHobbies />
      </div>
      <div id="footer">
        Made by Carlos Moraes, 2021.{" "}
        <a href="https://github.com/carloshrm/make-cv-tool">Source on Github.</a>
      </div>
    </>
  );
}

export default App;
