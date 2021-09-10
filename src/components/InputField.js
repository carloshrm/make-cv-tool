import React from "react";

function InputField({ dataValue, setDataFunction, fieldType, displaySwitch, style }) {
  const inputRef = React.createRef();
  const displayRef = React.createRef();
  const initialInfo = dataValue;

  function editField() {
    if (displaySwitch === undefined) return;
    if (inputRef.current.value === "" || inputRef.current.value === " ") return;

    inputRef.current.style.display = displaySwitch ? "none" : "block";
    displayRef.current.style.display = displaySwitch ? "block" : "none";
    displaySwitch = !displaySwitch;
  }

  return (
    <>
      <input
        className={"_inputField"}
        onBlur={editField}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Escape") e.target.blur();
        }}
        ref={inputRef}
        type={fieldType}
        minLength="1"
        placeholder={initialInfo}
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
