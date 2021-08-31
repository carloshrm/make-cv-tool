import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import styles from "../styles/SkillsHobbies.module.css";

function SkillsHobbies() {
  const [skillEntries, setSkillEntries] = useState([]);
  const [individualSkill, setIndividualSkill] = useState("");

  const skillDefault = "Type in one of your skills...";

  function addSkill() {
    setSkillEntries([...skillEntries, individualSkill]);
    setIndividualSkill(skillDefault);
  }
  useEffect(() => {
    setIndividualSkill(skillDefault);
  }, []);

  return (
    <div className={styles.skills_and_hobbies}>
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
