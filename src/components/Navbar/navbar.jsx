/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  // get user data
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    // Retrieve user ID and token from localStorage
    const storedUserId = localStorage.getItem("userId");
    const userToken = localStorage.getItem("userToken");
    console.log(userId);
    setUserId(storedUserId);
    // Use the user ID and token as needed
    if (userId && userToken) {
      console.log("User ID:", userId);
      console.log("User Token:", userToken);
      alert({ userId });
      // Perform actions with the user ID and token
    }
  }, []);
  const isLoggedIn = userId && userId !== "null";
  ////get the user
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [user, setUser] = useState("");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user",
        userId
      );

      if (response.status === 201) {
        // Registration successful
        console.log("Registration successful:", response.data);
        // You can redirect to a login page or show a success message here
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Validation errors
        setErrors(error.response.data.errors);
        console.error("Validation errors:", error.response.data.errors);
      } else {
        console.error("Error sending data:", error);
      }
    }
  };



  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link href={`/homepage/home5-light/`}>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/about/about-light`}>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href={`/works2/works2-light/`}>
                <a className="nav-link"> Works</a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href={`/about/about-light`}>
                <a className="nav-link"> Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/contact/contact-dark`}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    href={{
                      pathname: "/homepage/my-account",

                    }}
                  >
                    <a
                      style={{ backgroundColor: "#2b2d42", color: "white" }}
                      className="nav-login nav-link nav-sign"
                    >
                      My Account
                    </a>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    href={{
                      pathname: "/homepage/home1-light",
                      query: { action: "login" },
                    }}
                  >
                    <a
                      style={{ backgroundColor: "#2b2d42", color: "white" }}
                      className="nav-login nav-link nav-sign"
                    >
                      Login
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href={{
                      pathname: "/homepage/home1-light",
                      query: { action: "register" },
                    }}
                  >
                    <a
                      style={{ marginLeft: "-10px" }}
                      className="nav-link nav-sign nav-register"
                    >
                      Register
                    </a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
