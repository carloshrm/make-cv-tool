import React, { useEffect, useState } from "react";
import InformationListEntry from "./InformationListEntry";
import DisplayListedEntry from "./DisplayListedEntry";
import styles from "../styles/ListedInfo.module.css";

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

  useEffect(() => {
    let localEducation = JSON.parse(localStorage.getItem("educationInfo"));
    if (localEducation !== null) {
      setEducationInfoEntry(localEducation);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("educationInfo", JSON.stringify(educationInfo));
  });

  return (
    <div>
      <h3>Education </h3>
      <div className={styles.listed_entries}>
        <ul>
          {educationInfo.map((entry, i) => (
            <DisplayListedEntry key={i} id={i} singleEntryInfo={entry} removeEntry={removeEntry} />
          ))}
        </ul>
      </div>
      <InformationListEntry
        style={styles}
        info={educationInfo}
        addEntry={setEducationInfoEntry}
        defaultValues={defaultValues}
      />
    </div>
  );
}

export default EducationInfo;
