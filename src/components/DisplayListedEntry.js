import React from "react";

function displayListedEntry({ id, singleEntryInfo, removeEntry }) {
  return (
    <div>
      <ul>
        <li>{singleEntryInfo.entryTitle}</li>
        <li>{singleEntryInfo.entryLocation}</li>
        <li>{singleEntryInfo.entryYear}</li>
        <li>{singleEntryInfo.entryRemarks}</li>
      </ul>
      <button onClick={() => removeEntry(id)}>Del</button>
    </div>
  );
}

export default displayListedEntry;
