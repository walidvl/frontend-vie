import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ProjectDetails2Header from "../../components/Project-details2-header/project-details2-header";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectDescription from "../../components/Project-description/project-description";
import appData from "../../data/app.json";
import { useRouter } from "next/router";
import axios from "axios";
import ProjectDate from "../../data/project-details2.json";

const ProjectDetails2Light = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const [bookInformation, setBookInformation] = useState(null);
  const [bookdescription, setBookDescription] = useState('');
  useEffect(() => {
    const fetchBookInformation = async () => {
      try {
        if (!id) {
          // If id is falsy, skip the API request
          return;
        }

        const response = await axios.get(
          `http://127.0.0.1:8000/api/book/${id}`
        );
        const data = response.data;
        setBookInformation(data.book);
      } catch (error) {
        console.error("Error fetching book information:", error.message);
      }
    };


    // Call fetchBookInformation only if id is truthy
    if (id) {
      fetchBookInformation();
    }
  }, [id]);

  // Use a separate useEffect to set the description when bookInformation is available
  useEffect(() => {
    if (bookInformation && !bookdescription) {
      setBookDescription(bookInformation.description);
    }
  }, [bookInformation, bookdescription]);

  // Use a separate useEffect to set the description when bookInformation is available
  useEffect(() => {
    if (bookInformation && !bookdescription) {
      setBookDescription(bookInformation.description);
    }
  }, [bookInformation, bookdescription]);



  console.log('book description', bookdescription);
  console.log(bookInformation);



  const handleScroll = () => {
    if (navbarRef.current) { // Check if navbarRef.current is not null
      if (window.pageYOffset > 300) {
        navbarRef.current.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbarRef.current.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    }
  };

  // ...

  useEffect(() => {
    var navbar = navbarRef.current;
    var logo = logoRef.current;

    const handleScroll = () => {
      if (navbar && logo) {
        if (window.pageYOffset > 300) {
          navbar.classList.add("nav-scroll");
          logo.setAttribute("src", appData.darkLogo);
        } else {
          navbar.classList.remove("nav-scroll");
          logo.setAttribute("src", appData.lightLogo);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarRef, logoRef]); // Include
    if (!bookInformation) {
    return <p>Loading...</p>;
  }

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={bookInformation} projectHeaderImg={ProjectDate} />
        <ProjectIntroduction />
        <ProjectGallery />
        <ProjectDescription projectDescriptionData={bookdescription} />

        <Footer />
      </div>
    </LightTheme>
  );
};

export default ProjectDetails2Light;
