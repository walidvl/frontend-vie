import React, { useState, useEffect } from "react";
import Link from "next/link";
import { format } from "date-fns";

const ProjectDetails2Header = ({ projectHeaderData, projectHeaderImg }) => {
  const [tagsArray, setTagsArray] = useState([]);
  const [pricefr, setPricefr] = useState("");

  useEffect(() => {
    if (projectHeaderData) {
      const parsedTagsArray = JSON.parse(projectHeaderData.tags_table);
      setTagsArray(parsedTagsArray);
    }
  }, [projectHeaderData]);

  if (!projectHeaderData) {
    // Data is still being fetched, you can show a loading state
    return <p>Loading...</p>;
  }

  console.log(projectHeaderData);
  console.log(tagsArray);

  //PDF: Code
  const downloadPdf = () => {
    // Replace the Google Drive link below with your actual link
    const googleDriveLink =
      "https://drive.google.com/file/d/1A9Nyfq8CqiqtRkQIavcYEy699SXBVQ7B/view";

    // Open the Google Drive link in a new tab
    window.open(googleDriveLink, "_blank");
  };
  // end PDF Code
  const isFree = projectHeaderData.price === "free";

  // like code
 console.log(projectHeaderData.id)
 const [liked, setLiked] = useState(false);

 const handleLikeClick = async () => {
   try {
     const token = localStorage.getItem("yourAuthTokenKey");
     const method = liked ? 'DELETE' : 'POST';
     console.log(projectHeaderData.id);
     console.log(token);

    //  const endpoint = liked ? `unsave-book/${projectHeaderData.id}` : `save-book/${projectHeaderData.id}`;

     const response = await fetch(`http://127.0.0.1:8000/api/save-book`,
     {
       method: method,
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       }

     });
     if (response.status === 200) {
      // Login successful
      const data = await response.json(); // Parsing the JSON data from the response
      console.log("Operation successful:", data.message); // Accessing message from the parsed data



    }
    //  if (response.ok) {
    //    setLiked((prevLiked) => !prevLiked); // Toggle the liked state based on the response
    //  } else {
    //    // Handle errors (e.g., display a message to the user)
    //  }
   } catch (error) {
     console.error('Error in like/unlike operation:', error);
     // Handle errors (e.g., display a message to the user)
   }
 };


  return (
    <>
      <style jsx>{``}</style>
      <section
        className="page-header proj-det bg-img parallaxie valign"
        style={{
          backgroundImage: `url(${projectHeaderImg.projectHeaderImage})`,
        }}
        data-overlay-dark="4"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h6>{projectHeaderData.small_title}</h6>
                <h2>{projectHeaderData.title}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="item mt-30">
                <h6>Tags</h6>
                <p>
                  {tagsArray.map((tag, index) => (
                    <Link href="/#" key={index}>
                      <a>
                        {tag}
                        {tagsArray.length !== index + 1 ? " ," : ""}
                      </a>
                    </Link>
                  ))}
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="item mt-30">
                <h6>Date</h6>
                <p>
                  {format(new Date(projectHeaderData.date), "dd MMMM yyyy")}
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="item mt-30">
                <button className="buttondownload" onClick={downloadPdf}>
                  <img
                    src={projectHeaderImg.iconright} // replace with the actual path to your JPG icon
                    alt="Icon"
                    className="hovered-icon"
                  />{" "}
                  {isFree
                    ? `Get the Book`
                    : `Only for ${projectHeaderData.price}`}
                </button>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="item mt-30">
                <div
                  className={`like-icon-wrapper ${liked ? "liked" : "unliked"}`}
                  onClick={handleLikeClick}
                >
                  <i className="fa fa-heart"></i>
                  <div>Like It</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails2Header;
