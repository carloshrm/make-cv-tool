import React from "react";

function InputField({ fieldData, setData, fieldType }) {
  const inputRef = React.createRef();
  const displayRef = React.createRef();
  const editField = (e) => {
    inputRef.current.style.display = "block";
    displayRef.current.style.display = "none";
  };

  const inputFinished = (e) => {
    inputRef.current.style.display = "none";
    displayRef.current.style.display = "block";
  };

  return (
    <div>
      <input
        onBlur={inputFinished}
        ref={inputRef}
        type={fieldType}
        id={`${fieldData.replace(" ", "_").toLowerCase()}_input`}
        required
        minLength="1"
        placeholder={fieldData}
        value={fieldData}
        onChange={(e) => setData(e.target.value)}
      />
      <span
        id={`${fieldData.replace(" ", "_").toLowerCase()}_display`}
        style={{ display: "none" }}
        ref={displayRef}
        onClick={editField}
      >
        {fieldData}
      </span>
    </div>
  );
}

export default InputField;
