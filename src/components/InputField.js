import React from "react";

function InputField({ dataValue, setDataFunction, fieldType, displaySwitch }) {
  const inputRef = React.createRef();
  const displayRef = React.createRef();

  function editField() {
    if (displaySwitch === undefined) return;
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
        placeholder={dataValue}
        value={dataValue}
        onChange={(e) => setDataFunction(e.target.value)}
      />
      <span style={{ display: "none" }} ref={displayRef} onClick={editField}>
        {dataValue}
      </span>
    </div>
  );
}

export default InputField;
