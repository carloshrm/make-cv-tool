import { useEffect } from "react";
import "./styles/App.css";
import EducationInfo from "./components/EducationInfo";
import JobInfo from "./components/JobInfo";
import PersonalInfo from "./components/PersonalInfo";
import SkillsHobbies from "./components/SkillsHobbies";

function App() {
  function resetToDefault() {
    localStorage.clear();
    document.location.reload();
  }

  return (
    <>
      <ul id="top_nav">
        <li>Save</li>
        <li onClick={resetToDefault}>Clear</li>
      </ul>
      <div id="main_resume">
        <PersonalInfo />
        <EducationInfo />
        <JobInfo />
        <SkillsHobbies />
        <div id="footer">
          <footer>Footer</footer>
        </div>
      </div>
    </>
  );
}

export default App;
