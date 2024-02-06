import React, { useState } from "react";
// Import the CountrySelector component
import CountrySelector from "../Contry-list/contry-list"; // Adjust the path as necessary

const ProfileContent = () => {
  const [address, setAddress] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit address and selectedCountry to the server or handle them as needed
  };

  return (
    <div className="account-container">
      <h2 className="account-title">Profile Information</h2>
      <form className="account-form" onSubmit={handleSubmit}>
        <div className="account-form-group">
          <label htmlFor="userName" className="account-label">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            className="account-input"
            value="Rebecca" // Replace with state variable if needed
            // onChange={...} // Handle state changes
          />
        </div>
        <div className="account-form-group">
          <label htmlFor="firstName" className="account-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="account-input"
            value="Rebecca" // Replace with state variable if needed
            // onChange={...} // Handle state changes
          />
          <label htmlFor="lastName" className="account-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="account-input"
            value="Sanders" // Replace with state variable if needed
            // onChange={...} // Handle state changes
          />
        </div>
        <div className="account-form-group account-contry">
          <label htmlFor="country" className="account-label">
            Country
          </label>
          <CountrySelector onChange={setSelectedCountry} />
        </div>

        <div className="account-form-group">

            <label htmlFor="address" className="account-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="account-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label htmlFor="phone" className="account-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="account-input"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

        </div>
        <div className="account-form-group">
          <button type="submit" className="account-button">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileContent;
