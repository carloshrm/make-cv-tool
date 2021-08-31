import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Icon from "@material-ui/core/Icon";

function InformationListEntry({ info, addEntry, defaultValues, style }) {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryLocation, setEntryLocation] = useState("");
  const [entryYear, setEntryYear] = useState("");
  const [entryRemarks, setEntryRemarks] = useState("");
  const [displaySwitch, flipDisplaySwitch] = useState(false);

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

  function formDisplayHandler() {
    flipDisplaySwitch(!displaySwitch);
  }

  return (
    <>
      <h4 className={style.form_title} onClick={formDisplayHandler}>
        <Icon>add</Icon>
        <p>Add an Entry</p>
      </h4>
      {displaySwitch && (
        <div
          className={style.listed_info_input}
          style={{ display: displaySwitch ? style.display : "none" }}
        >
          <InputField dataValue={entryTitle} setDataFunction={setEntryTitle} fieldType="text" />
          <InputField
            dataValue={entryLocation}
            setDataFunction={setEntryLocation}
            fieldType="text"
          />
          <InputField dataValue={entryYear} setDataFunction={setEntryYear} fieldType="text" />
          <textarea
            onChange={(e) => setEntryRemarks(e.target.value)}
            value={entryRemarks}
          ></textarea>
          <div>
            <button onClick={addEntryHandler}>Add</button>
            <button onClick={setDefaults}>Clear</button>
          </div>
        </div>
      )}
    </>
  );
}

export default InformationListEntry;
