import React, { useState } from "react";
import EducationEntry from "./EducationEntry";

// title
// graducation place, year
// comments (dissertation theme, advisor, etc... optional?)

// form component/display component
// map entries array into component for display

function EducationInfo() {
  const [educationInfo, addEducationInfo] = useState([]);

  return (
    <div id="education_info_div">
      <h3>Education:</h3>

      <EducationEntry info={educationInfo} addEntry={addEducationInfo} />
    </div>
  );
}

export default EducationInfo;
