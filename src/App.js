import "./App.css";
import EducationInfo from "./components/EducationInfo";
import JobInfo from "./components/JobInfo";
import PersonalInfo from "./components/PersonalInfo";
import SkillsHobbies from "./components/SkillsHobbies";

// required info

// name
// address // phone || email
// personal profile

// template form - add individual entries

// job history
// ( date - role title, location, comp name)

// education // qualifications
//(name - date - title)

// key skills // hobbies and intrests

// extra section with options for more info

// formatting

function App() {
  return (
    <div className="App">
      <div id="main_resume">
        <PersonalInfo />
        <EducationInfo />
        <JobInfo />
        <SkillsHobbies />
      </div>
    </div>
  );
}

export default App;
