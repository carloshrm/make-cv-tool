import React, { useState } from "react";
import InformationListEntry from "./InformationListEntry";
import DisplayListedEntry from "./DisplayListedEntry";

// title
// graducation place, year
// comments (dissertation theme, advisor, etc... optional?)

// form component/display component
// map entries array into component for display

function EducationInfo() {
  const [educationInfo, setEducationInfoEntry] = useState([]);

  const defaultValues = {
    title: "Degree Title",
    location: "Graduation Place",
    year: "Graducation Year",
    remarks: "Extra Remarks",
  };

  function removeEntry(targetIndex) {
    setEducationInfoEntry(educationInfo.filter((e, i) => i !== targetIndex));
  }

  return (
    <div id="education_info_div">
      <h3>Education:</h3>

      {educationInfo.map((entry, i) => (
        <DisplayListedEntry key={i} id={i} singleEntryInfo={entry} removeEntry={removeEntry} />
      ))}

      <InformationListEntry
        info={educationInfo}
        addEntry={setEducationInfoEntry}
        defaultValues={defaultValues}
      />
    </div>
  );
}

export default EducationInfo;
