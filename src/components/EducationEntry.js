import React, { useEffect, useState } from "react";
import InputField from "./InputField";

function EducationEntry({ info, addEntry }) {
  const [educationTitle, setEducationTitle] = useState("");
  const [educationPlace, setEducationPlace] = useState("");
  const [educationYear, setEducationYear] = useState("");
  const [educationRemarks, setEducationRemarks] = useState("");

  function defaultValues() {
    setEducationTitle("Degree Title");
    setEducationPlace("Graduation Place");
    setEducationYear("Graducation Year");
    setEducationRemarks("Extra Remarks");
  }

  useEffect(() => {
    defaultValues();
  }, [info]);

  const addEntryHandler = () => {
    const newEntry = {
      educationTitle,
      educationPlace,
      educationYear,
      educationRemarks,
    };
    addEntry((value) => [...value, newEntry]);
  };

  return (
    <div className="education_entry">
      <InputField fieldData={educationTitle} setData={setEducationTitle} fieldType="text" />
      <InputField fieldData={educationPlace} setData={setEducationPlace} fieldType="text" />
      <InputField fieldData={educationYear} setData={setEducationYear} fieldType="text" />

      <textarea
        onChange={(e) => setEducationRemarks(e.target.value)}
        id="education_remarks"
        cols="30"
        rows="10"
        value={educationRemarks}
      ></textarea>
      <button onClick={addEntryHandler}>Add Entry</button>
    </div>
  );
}

export default EducationEntry;
