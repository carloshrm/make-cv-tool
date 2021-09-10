import React from "react";

function InputField({ dataValue, setDataFunction, fieldType, displaySwitch, style }) {
  const inputRef = React.createRef();
  const displayRef = React.createRef();

  function swapVisibility() {
    if (displaySwitch === undefined) return;
    if (inputRef.current.value.trim() === "") return;
    displaySwitch = !displaySwitch;
  }

  return (
    <>
      <input
        className={"_inputField"}
        onBlur={swapVisibility}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Escape") e.target.blur();
        }}
        ref={inputRef}
        type={fieldType}
        minLength="1"
        placeholder={dataValue}
        value={dataValue}
        style={{ display: displaySwitch ? "none" : "block" }}
        onChange={(e) => setDataFunction(e.target.value)}
      />
      <p
        style={{ display: displaySwitch ? "block" : "none" }}
        className={style}
        ref={displayRef}
        onClick={swapVisibility}
      >
        {dataValue}
      </p>
    </>
  );
}

export default InputField;
