import React, { useState } from "react";
import DisplayListedEntry from "./DisplayListedEntry";
import InformationListEntry from "./InformationListEntry";

// template form - add individual entries
// job history
// ( date - role title, location, comp name)

function JobInfo() {
  const [jobInfo, setJobInfoEntry] = useState([]);

  const defaultValues = {
    title: "Degree Title",
    location: "Graduation Place",
    year: "Graducation Year",
    remarks: "Extra Remarks",
  };

  function removeEntry(targetIndex) {
    setJobInfoEntry(jobInfo.filter((e, i) => i !== targetIndex));
  }

  return (
    <div id="job_info_div">
      <h3>Job Info:</h3>

      {jobInfo.map((entry, i) => (
        <DisplayListedEntry key={i} id={i} singleEntryInfo={entry} removeEntry={removeEntry} />
      ))}

      <InformationListEntry
        info={jobInfo}
        addEntry={setJobInfoEntry}
        defaultValues={defaultValues}
      />
    </div>
  );
}

export default JobInfo;
