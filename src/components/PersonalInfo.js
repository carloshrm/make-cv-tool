import React, { useState } from "react";
import InputField from "./InputField";
import styles from "../styles/PersonalInfo.module.css";

function PersonalInfo() {
  const [userName, setUserName] = useState("Your Name...");
  const [localAddress, setLocalAddress] = useState("Where you live...");
  const [emailAddress, setEmail] = useState("Email Address...");
  const [phoneNumber, setPhoneNumber] = useState("Phone Number...");
  const [socialNetwork, setSocialNetwork] = useState("Social Netowrk");
  const [personalProfile, setPersonalProfile] = useState("Personal Profile");

  const profileRef = React.createRef();
  const profileInput = React.createRef();
  function swapDisplay(e) {
    if (profileInput.current.value === "" || profileInput.current.value === " ") return;
    let switchValue = e.target.nodeName === "P";
    profileInput.current.style.display = switchValue ? null : "none";
    profileRef.current.style.display = switchValue ? "none" : null;
  }

  return (
    <>
      <div className={styles.personal_info_div}>
        <div>
          <InputField
            style={styles.name}
            dataValue={userName}
            setDataFunction={setUserName}
            fieldType="text"
            displaySwitch={true}
          />
        </div>
        <div className={styles.detailed_info_div}>
          <span>Email Address:</span>
          <InputField
            style={styles.info}
            dataValue={emailAddress}
            setDataFunction={setEmail}
            fieldType="email"
            displaySwitch={true}
          />
          <span>Address:</span>
          <InputField
            style={styles.info}
            dataValue={localAddress}
            setDataFunction={setLocalAddress}
            fieldType="text"
            displaySwitch={true}
          />
          <span>Phone Number:</span>
          <InputField
            style={styles.info}
            dataValue={phoneNumber}
            setDataFunction={setPhoneNumber}
            fieldType="tel"
            displaySwitch={true}
          />
          <span>Social Network:</span>
          <InputField
            dataValue={socialNetwork}
            setDataFunction={setSocialNetwork}
            fieldType="text"
            displaySwitch={true}
          />
        </div>
      </div>
      <div className={styles.personal_profile_div}>
        <h3>Profile </h3>
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
    </>
  );
}

export default PersonalInfo;
