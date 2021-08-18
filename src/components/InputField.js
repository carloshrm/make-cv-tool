import React from "react";

function InputField({ fieldData, setData, fieldType }) {
  const inputRef = React.createRef();
  const displayRef = React.createRef();
  let displaySwitch = true;

  function editField() {
    inputRef.current.style.display = displaySwitch ? "none" : "block";
    displayRef.current.style.display = displaySwitch ? "block" : "none";
    displaySwitch = !displaySwitch;
  }

  return (
    <div>
      <input
        onBlur={editField}
        ref={inputRef}
        type={fieldType}
        required
        minLength="1"
        placeholder={fieldData}
        value={fieldData}
        onChange={(e) => setData(e.target.value)}
      />
      <span style={{ display: "none" }} ref={displayRef} onClick={editField}>
        {fieldData}
      </span>
    </div>
  );
}

export default InputField;