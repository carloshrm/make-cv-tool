import React, { useState } from "react";

function EducationEntryDisplay({ id, singleEntryInfo, removeEntry, editEntry }) {
  return (
    <div className="education_entry">
      <ul>
        <li>{singleEntryInfo.educationTitle}</li>
        <li>{singleEntryInfo.educationPlace}</li>
        <li>{singleEntryInfo.educationYear}</li>
        <li>{singleEntryInfo.educationRemarks}</li>
      </ul>
      <button onClick={() => removeEntry(id)}>Del</button>
      <button onClick={() => removeEntry(id)}>Edit</button>
    </div>
  );
}

export default EducationEntryDisplay;
