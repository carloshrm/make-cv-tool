import React, { useState } from "react";
import EducationEntry from "./EducationEntry";
import EducationEntryDisplay from "./EducationEntryDisplay";

// title
// graducation place, year
// comments (dissertation theme, advisor, etc... optional?)

// form component/display component
// map entries array into component for display

function EducationInfo() {
  const [educationInfo, setEducationInfoEntry] = useState([]);

  function removeEntry(targetIndex) {
    setEducationInfoEntry(educationInfo.filter((e, i) => i !== targetIndex));
  }
  function editEntry(targetIndex) {}

  return (
    <div id="education_info_div">
      <h3>Education:</h3>

      {educationInfo.map((entry, i) => (
        <EducationEntryDisplay key={i} id={i} singleEntryInfo={entry} removeEntry={removeEntry} />
      ))}

      <EducationEntry info={educationInfo} addEntry={setEducationInfoEntry} />
    </div>
  );
}

export default EducationInfo;
