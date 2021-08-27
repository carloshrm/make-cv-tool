import React, { useEffect, useState } from "react";
import InputField from "./InputField";

function InformationListEntry({ info, addEntry, defaultValues, style }) {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryLocation, setEntryLocation] = useState("");
  const [entryYear, setEntryYear] = useState("");
  const [entryRemarks, setEntryRemarks] = useState("");

  useEffect(() => {
    setDefaults();
  }, [info, defaultValues]);

  function addEntryHandler() {
    const newEntry = {
      entryTitle,
      entryLocation,
      entryYear,
    };
    if (![defaultValues.remarks, " ", ""].some((val) => entryRemarks === val)) {
      newEntry.entryRemarks = entryRemarks;
    }
    addEntry((value) => [...value, newEntry]);
  }

  function setDefaults() {
    setEntryTitle(defaultValues.title);
    setEntryLocation(defaultValues.location);
    setEntryYear(defaultValues.year);
    setEntryRemarks(defaultValues.remarks);
  }

  return (
    <div className={style}>
      <h4>Add an Entry: </h4>
      <InputField dataValue={entryTitle} setDataFunction={setEntryTitle} fieldType="text" />
      <InputField dataValue={entryLocation} setDataFunction={setEntryLocation} fieldType="text" />
      <InputField dataValue={entryYear} setDataFunction={setEntryYear} fieldType="text" />
      <textarea onChange={(e) => setEntryRemarks(e.target.value)} value={entryRemarks}></textarea>
      <div>
        <button onClick={addEntryHandler}>Add</button>
        <button onClick={setDefaults}>Clear</button>
      </div>
    </div>
  );
}

export default InformationListEntry;
