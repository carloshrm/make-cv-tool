import { useEffect } from "react";
import "./styles/App.css";
import EducationInfo from "./components/EducationInfo";
import JobInfo from "./components/JobInfo";
import PersonalInfo from "./components/PersonalInfo";
import SkillsHobbies from "./components/SkillsHobbies";

function App() {
  return (
    <>
      <ul id="top_nav">
        <li>Save</li>
        <li>Clear</li>
        <li>instruc</li>
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
