import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import styles from "../styles/PersonalInfo.module.css";

function PersonalInfo() {
  const [personalInfo, setInfo] = useState({
    userName: "",
    localAddress: "",
    emailAddress: "",
    phoneNumber: "",
    socialNetwork: "",
    personalProfile: "",
  });

  const profileRef = React.createRef();
  const profileInput = React.createRef();

  function setDefaults() {
    setInfo({
      userName: "Your Name.",
      localAddress: "Where you live.",
      emailAddress: "Email Address.",
      phoneNumber: "Phone Number.",
      socialNetwork: "Social Network Link.",
      personalProfile: "Write a little about yourself...",
    });
  }

  function swapDisplay(e) {
    if (profileInput.current.value === "" || profileInput.current.value === " ") return;
    let switchValue = e.target.nodeName === "P";
    profileInput.current.style.display = switchValue ? null : "none";
    profileRef.current.style.display = switchValue ? "none" : null;
  }

  useEffect(() => {
    // Run only once (using []) when loaded. If no local data is found,
    // then set the fields to their default value.
    let localInfo = JSON.parse(localStorage.getItem("personalInfo"));
    if (localInfo === null) {
      setDefaults();
    } else {
      setInfo(localInfo);
    }
  }, []);

  useEffect(() => {
    // Run every time a field is updated, set the new data locally.
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
  });

  return (
    <>
      <div className={styles.personal_info_div}>
        <div>
          <InputField
            style={styles.name}
            dataValue={personalInfo.userName}
            setDataFunction={(val) => setInfo({ ...personalInfo, userName: val })}
            fieldType="text"
            displaySwitch={true}
          />
        </div>
        <div className={styles.detailed_info_div}>
          <span>Email Address:</span>
          <InputField
            style={styles.info}
            dataValue={personalInfo.emailAddress}
            setDataFunction={(val) => setInfo({ ...personalInfo, emailAddress: val })}
            fieldType="email"
            displaySwitch={true}
          />
          <span>Address:</span>
          <InputField
            style={styles.info}
            dataValue={personalInfo.localAddress}
            setDataFunction={(val) => setInfo({ ...personalInfo, localAddress: val })}
            fieldType="text"
            displaySwitch={true}
          />
          <span>Phone Number:</span>
          <InputField
            style={styles.info}
            dataValue={personalInfo.phoneNumber}
            setDataFunction={(val) => setInfo({ ...personalInfo, phoneNumber: val })}
            fieldType="tel"
            displaySwitch={true}
          />
          <span>Social Network:</span>
          <InputField
            dataValue={personalInfo.socialNetwork}
            setDataFunction={(val) => setInfo({ ...personalInfo, socialNetwork: val })}
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
          onChange={(e) => setInfo({ ...personalInfo, personalProfile: e.target.value })}
          value={personalInfo.personalProfile}
        ></textarea>
        <p onClick={swapDisplay} ref={profileRef} style={{ display: "none" }}>
          {personalInfo.personalProfile}
        </p>
      </div>
    </>
  );
}

export default PersonalInfo;
