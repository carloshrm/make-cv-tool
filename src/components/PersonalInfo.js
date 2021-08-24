import React, { useState } from "react";
import InputField from "./InputField";
import styles from "../styles/PersonalInfo.module.css";

function PersonalInfo() {
  const [userName, setUserName] = useState("Your Name");
  const [emailAddress, setEmail] = useState("Email Address");
  const [phoneNumber, setPhoneNumber] = useState("Phone Number");
  const [personalProfile, setPersonalProfile] = useState("Personal Profile");

  const profileRef = React.createRef();
  const profileInput = React.createRef();
  function swapDisplay(e) {
    let switchValue = e.target.nodeName === "P";
    profileInput.current.style.display = switchValue ? null : "none";
    profileRef.current.style.display = switchValue ? "none" : null;
  }

  return (
    <div id="personal_info_div">
      <h3>Personal Info:</h3>
      <InputField
        style={styles.name}
        dataValue={userName}
        setDataFunction={setUserName}
        fieldType="text"
        displaySwitch={true}
      />
      <InputField
        dataValue={emailAddress}
        setDataFunction={setEmail}
        fieldType="email"
        displaySwitch={true}
      />
      <InputField
        dataValue={phoneNumber}
        setDataFunction={setPhoneNumber}
        dataKey={"phoneNumber"}
        fieldType="tel"
        displaySwitch={true}
      />

      <textarea
        ref={profileInput}
        onBlur={swapDisplay}
        onChange={(e) => setPersonalProfile(e.target.value)}
        required
        id="profile_input"
        placeholder="Personal Profile"
        value={personalProfile}
      ></textarea>
      <p onClick={swapDisplay} ref={profileRef} style={{ display: "none" }}>
        {personalProfile}
      </p>
    </div>
  );
}

export default PersonalInfo;
