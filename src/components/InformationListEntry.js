import React, { useEffect, useState } from "react";
import InputField from "./InputField";

function InformationListEntry({ info, addEntry, defaultValues, style }) {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryLocation, setEntryLocation] = useState("");
  const [entryYear, setEntryYear] = useState("");
  const [entryRemarks, setEntryRemarks] = useState("");

  useEffect(() => {
    setEntryTitle(defaultValues.title);
    setEntryLocation(defaultValues.location);
    setEntryYear(defaultValues.year);
    setEntryRemarks(defaultValues.remarks);
  }, [info, defaultValues]);

  const addEntryHandler = () => {
    const newEntry = {
      entryTitle,
      entryLocation,
      entryYear,
      entryRemarks,
    };
    addEntry((value) => [...value, newEntry]);
  };

  return (
    <div className={style}>
      <h4>Add an Entry: </h4>
      <InputField dataValue={entryTitle} setDataFunction={setEntryTitle} fieldType="text" />
      <InputField dataValue={entryLocation} setDataFunction={setEntryLocation} fieldType="text" />
      <InputField dataValue={entryYear} setDataFunction={setEntryYear} fieldType="text" />
      <textarea onChange={(e) => setEntryRemarks(e.target.value)} value={entryRemarks}></textarea>
      <div>
        <button onClick={addEntryHandler}>Add</button>
        <button onClick={addEntryHandler}>Clear</button>
      </div>
    </div>
  );
}

export default InformationListEntry;
