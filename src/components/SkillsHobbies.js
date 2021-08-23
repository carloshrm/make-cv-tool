import React, { useEffect, useState } from "react";
import InputField from "./InputField";

function SkillsHobbies() {
  const [skillEntries, setSkillEntries] = useState([]);
  const [individualSkill, setIndividualSkill] = useState("");

  const skillDefault = "Describe a skill you'd like to add...";

  function addSkill(content) {
    setSkillEntries([...skillEntries, individualSkill]);
    setIndividualSkill(skillDefault);
  }
  useEffect(() => {
    setIndividualSkill(skillDefault);
  }, []);

  return (
    <div className="skills_and_hobbies_div">
      <h3>Skills</h3>
      <ul>{skillEntries.length > 0 && skillEntries.map((entry, i) => <li key={i}>{entry}</li>)}</ul>
      <InputField
        dataValue={individualSkill}
        setDataFunction={setIndividualSkill}
        fieldType="text"
      />
      <button onClick={addSkill}>Add</button>
    </div>
  );
}

export default SkillsHobbies;
