import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import DarkTheme from "../../layouts/Light";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";
import MyAccount from "../../components/my-account-body/my-account-body";
import SContactForm from "../../components/s-contact-form/s-contact-form";

const Homepage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (

    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <FreelancreIntro />
      <MyAccount />
      <SContactForm noLine />
      <Footer />
    </LightTheme>

  );
};

export default Homepage;
