import React from "react";

function InputField({ dataValue, setDataFunction, fieldType, displaySwitch, style }) {
  const inputRef = React.createRef();
  const displayRef = React.createRef();

  function editField() {
    if (displaySwitch === undefined) return;
    inputRef.current.style.display = displaySwitch ? "none" : "block";
    displayRef.current.style.display = displaySwitch ? "block" : "none";
    displaySwitch = !displaySwitch;
  }

  return (
    <>
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
      <p style={{ display: "none" }} className={style} ref={displayRef} onClick={editField}>
        {dataValue}
      </p>
    </>
  );
}

export default InputField;
