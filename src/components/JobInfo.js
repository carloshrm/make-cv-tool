import React, { useState } from "react";
import DisplayListedEntry from "./DisplayListedEntry";
import InformationListEntry from "./InformationListEntry";
import styles from "../styles/ListedInfo.module.css";

function JobInfo() {
  const [jobInfo, setJobInfoEntry] = useState([]);

  const defaultValues = {
    title: "Position",
    location: "Location",
    year: "Date",
    remarks: "Extra Remarks",
  };

  function removeEntry(targetIndex) {
    setJobInfoEntry(jobInfo.filter((e, i) => i !== targetIndex));
  }

  return (
    <div>
      <h3>Job Experience </h3>
      <div className={styles.listed_entries}>
        {jobInfo.map((entry, i) => (
          <DisplayListedEntry key={i} id={i} singleEntryInfo={entry} removeEntry={removeEntry} />
        ))}
      </div>

      <InformationListEntry
        style={styles}
        info={jobInfo}
        addEntry={setJobInfoEntry}
        defaultValues={defaultValues}
      />
    </div>
  );
}

export default JobInfo;
