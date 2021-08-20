import React, { useState } from "react";
import InputField from "./InputField";

function PersonalInfo() {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [emailAddress, setEmail] = useState("Email Address");
  const [phoneNumber, setPhoneNumber] = useState("Phone Number");
  const [personalProfile, setPersonalProfile] = useState("Personal Profile");

  return (
    <div id="personal_info_div">
      <h3>Personal Info:</h3>
      <InputField
        dataValue={firstName}
        setDataFunction={setFirstName}
        fieldType="text"
        displaySwitch={true}
      />
      <InputField
        dataValue={lastName}
        setDataFunction={setLastName}
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
        onChange={(e) => setPersonalProfile(e.target.value)}
        required
        id="profile_input"
        placeholder="Personal Profile"
        value={personalProfile}
      ></textarea>
    </div>
  );
}

export default PersonalInfo;
