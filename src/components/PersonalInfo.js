import React, { useState } from "react";
import InputField from "./InputField";

function PersonalInfo() {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [emailAddress, setEmail] = useState("Email Address");
  const [phoneNumber, setPhoneNumber] = useState("Phone Number");
  const [personalProfile, setProfile] = useState("Personal Profile");

  return (
    <div id="personal_info_div">
      <h3>Personal Info:</h3>
      <InputField fieldData={firstName} setData={setFirstName} fieldType="text" />
      <InputField fieldData={lastName} setData={setLastName} fieldType="text" />
      <InputField fieldData={emailAddress} setData={setEmail} fieldType="email" />
      <InputField fieldData={phoneNumber} setData={setPhoneNumber} fieldType="tel" />
      <textarea
        onChange={(e) => setProfile(e.target.value)}
        required
        id="profile_input"
        placeholder="Personal Profile"
        value={personalProfile}
      ></textarea>
    </div>
  );
}

export default PersonalInfo;
