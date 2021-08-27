import React, { useState } from "react";
import InformationListEntry from "./InformationListEntry";
import DisplayListedEntry from "./DisplayListedEntry";
import styles from "../styles/ListedInfo.module.css";

// title
// graducation place, year
// comments (dissertation theme, advisor, etc... optional?)

// form component/display component
// map entries array into component for display

function EducationInfo() {
  const [educationInfo, setEducationInfoEntry] = useState([]);

  const defaultValues = {
    title: "Degree Title",
    location: "Location",
    year: "Year",
    remarks: "Extra Remarks",
  };

  function removeEntry(targetIndex) {
    setEducationInfoEntry(educationInfo.filter((e, i) => i !== targetIndex));
  }

  return (
    <div className={styles}>
      <h3>Education </h3>
      <div className={styles.listed_entries}>
        <ul>
          {educationInfo.map((entry, i) => (
            <DisplayListedEntry key={i} id={i} singleEntryInfo={entry} removeEntry={removeEntry} />
          ))}
        </ul>
      </div>

      <InformationListEntry
        style={styles.listed_info_input}
        info={educationInfo}
        addEntry={setEducationInfoEntry}
        defaultValues={defaultValues}
      />
    </div>
  );
}

export default EducationInfo;
