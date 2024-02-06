import React, { useState, useEffect } from "react";
import LightTheme from "../../layouts/Light";
import { GoogleOAuthProvider , GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/router";

const Homepage1 = () => {




  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //////////////
  const [errors, setErrors] = useState({}); // Initialize errors state as an empty object

  const changeUserFieldHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        userData
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
  ////////////////////login

  const [userDatalogin, setUserDatalogin] = useState({
    email: "",
    password: "",
  });
  const changeUserFieldHandlerlogin = (e) => {
    setUserDatalogin({
      ...userDatalogin,
      [e.target.name]: e.target.value,
    });
  };
  console.log(userDatalogin);

  const [loginErrors, setLoginErrors] = useState({});
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        userDatalogin
      );

      if (response.status === 200) {
        // Login successful
        console.log("Login successful:", response.data);

        // Extract the token from the response
        const token = response.data.token;

        // Store the token in localStorage
        localStorage.setItem("yourAuthTokenKey", token); // Replace with your actual key

        // You can handle the successful login here (e.g., redirect to a dashboard)
        router.push("/homepage/home5-light/");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Invalid credentials
        setLoginErrors({ message: "Invalid credentials" });
        console.error("Invalid credentials");
      } else if (error.response && error.response.status === 422) {
        // Validation errors
        setLoginErrors(error.response.data.errors);
        console.error("Validation errors:", error.response.data.errors);
      } else {
        console.error("Error sending data:", error);
      }
    }
  };
//login chek
const { action } = router.query;
useEffect(() => {

console.log(action);
const isCheckboxChecked = action === 'login';


const checkbox = document.getElementById('chksign');

    // Set the checked state of the checkbox
    if (checkbox) {
      checkbox.checked = isCheckboxChecked;
    }
  }, [action]);
  ///////google auth :



  // const responseGoogle = async (googleUser) => {
  //   try {
  //     // Send the Google authentication response to your Laravel backend
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/api/google-login",
  //       {
  //         token: googleUser.tokenId,
  //       }

  //     );

  //     if (response.status === 200) {
  //       // Handle the successful login as needed
  //       console.log("Google login successful:", response.data);

  //       // Redirect to the desired page
  //       router.push("/homepage/home5-light/");
  //     }
  //   } catch (error) {
  //     // Handle Google login error
  //     console.error("Google login error:", error);
  //   }
  // };
  return (
    <LightTheme>
      <style jsx>{`
        .mainsign {
          width: 350px;
          height: 500px;
          background: red;
          overflow: hidden;
          background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
            no-repeat center/cover;
          border-radius: 10px;
          box-shadow: 5px 20px 50px #000;
          background: linear-gradient(to bottom, #ffce00, #dd0000);
        }
        .centersign {
          display: flex;
          margin: 0;
          padding: 0;
          height: 100vh;
          justify-content: center;
          align-items: center;
          background: #f7f4ea;
        }
        #chksign {
          display: none;
        }
        .signupsign {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .labelsign {
          color: #fff;
          font-size: 2.3em;
          justify-content: center;
          display: flex;
          margin: 60px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.5s ease-in-out;
        }
        .inputsign {
          width: 80%;
          height: 36px;
          background: #e0dede;
          justify-content: center;
          display: flex;
          margin: 20px auto;
          padding: 10px;
          border: none;
          outline: none;
          border-radius: 5px;
        }
        .buttonsign {
          width: 50%;
          height: 40px;
          margin: 10px auto;
          justify-content: center;
          display: block;
          color: #fff;
          background: #80a1d4;
          font-size: 1em;
          font-weight: bold;
          margin-top: 20px;
          outline: none;
          border: none;
          border-radius: 5px;
          transition: 0.2s ease-in;
          cursor: pointer;
        }
        .buttonsign:hover {
          background: #6080b0;
        }
        .loginsign {
          height: 460px;
          background: #eee;
          border-radius: 60% / 10%;
          transform: translateY(-180px);
          transition: 0.8s ease-in-out;
        }
        .loginsign .labelsign {
          color: #6080b0;
          transform: scale(0.6);
        }

        #chksign:checked ~ .loginsign {
          transform: translateY(-500px);
        }
        #chksign:checked ~ .loginsign .labelsign {
          transform: scale(1);
        }
        #chksign:checked ~ .loginsign .labelsign {
          transform: scale(0.6);
        }
      `}</style>
      <div className="centersign">
        <div className="mainsign">
          <input type="checkbox" id="chksign" aria-hidden="true"  />

          <div className="signupsign">
            <form method="POST" onSubmit={handleSubmit}>
              <label className="labelsign" htmlFor="chksign" aria-hidden="true">
                Sign up
              </label>
              <div></div>
              <input
                className="inputsign"
                type="text"
                name="name"
                placeholder="User name"
                onChange={(e) => changeUserFieldHandler(e)}
                required
              />
              <input
                className="inputsign"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => changeUserFieldHandler(e)}
                required
              />
              <input
                className="inputsign"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => changeUserFieldHandler(e)}
                required
              />

              {errors.email && <div className="error">{errors.email[0]}</div>}
              {errors.password && (
                <div className="error">{errors.password[0]}</div>
              )}
              {/* Display validation errors for email and password fields */}

              <button className="buttonsign" type="submit">
                Sign up
              </button>
            </form>
          </div>
          <div className="loginsign">
            <form method="POST" onSubmit={handleLogin}>
              <label className="labelsign" htmlFor="chksign" aria-hidden="true">
                Login
              </label>

              <input
                className="inputsign"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => changeUserFieldHandlerlogin(e)}
                required
              />
              {loginErrors.email && (
                <div className="error">{loginErrors.email[0]}</div>
              )}
              {/* Display validation error for email field */}
              <input
                className="inputsign"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => changeUserFieldHandlerlogin(e)}
                required
              />
              {loginErrors.password && (
                <div className="error">{loginErrors.password[0]}</div>
              )}
              {/* Display validation error for password field */}
              <button className="buttonsign" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </LightTheme>
  );
};

export default Homepage1;
