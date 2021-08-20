import React, { useState } from "react";

// template form - add individual entries
// job history
// ( date - role title, location, comp name)

function JobInfo() {
  const [jobInfo, setJobInfo] = useState([]);

  return (
    <div id="job_info">
      <h3>Job Info:</h3>
    </div>
  );
}

export default JobInfo;
