import React from "react";

function displayListedEntry({ id, singleEntryInfo, removeEntry }) {
  return (
    <div>
      <span>{singleEntryInfo.entryTitle + " - "}</span>
      <span>{singleEntryInfo.entryYear}</span>
      <p>{singleEntryInfo.entryLocation}</p>
      <p>{singleEntryInfo.entryRemarks}</p>
      <button onClick={() => removeEntry(id)}>Del</button>
    </div>
  );
}

export default displayListedEntry;
