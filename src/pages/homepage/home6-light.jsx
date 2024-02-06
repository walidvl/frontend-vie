import React, { useState, useEffect } from "react";
import axios from "axios";

function Homepage6() {


  //data be send
  const [databook, setDatabook] = useState({
    title: "",
    bookoption: "",
    filter: "a1-a2", // Default filter
    image: "",
  });
  const [isUploadDataDisabled, setUploadDataDisabled] = useState(false);
  //error
  const [errors, setErrors] = useState({});

  //get image
  const [images, setImages] = useState([]);

  //upload
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          className="p-2"
          src={photo}
          alt=""
          key={photo}
          style={{ width: "20%", height: "180px" }}
        />
      );
    });
  };

  function uploadToServer(e) {
    e.preventDefault();
    var files = e.target[0].files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("file[]", files[i], files[i].name); // Include the original file name
      setDatabook({
        ...databook,
        image: files[i].name,
      });
    }

    axios({
      url: "http://127.0.0.1:8000/api/upload",
      method: "POST",
      data: formData,
    })
      .then((res) => {
        console.log(res);
        console.log(res.path);
      })
      .catch((error) => {
        console.error("Error uploading files:", error);
      });
  }

  ///data

  const handleInputChange = (e) => {
    setDatabook({
      ...databook,
      [e.target.name]: e.target.value,
    });
    console.log(databook);
  };

  const handleSubmitdata = async (e) => {
    // Declare as async function
    e.preventDefault();
    console.log(databook);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/uploaddata", // Replace with your API endpoint
        databook
      );

      if (response.status === 200) {
        // Book uploaded successfully
        console.log("Book uploaded successfully:", response.data);

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

  //////get images
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books");
      const data = await response.json();
      setImages(data.files);
      console.error(data.files);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="app p-5">
      <div>
        <h2>Upload a New Book</h2>
        <form
          method="POST"
          onSubmit={handleSubmitdata}
          encType="multipart/form-data"
        >
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          <div>
            <label>Book Option:</label>
            <input
              type="text"
              name="bookoption"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          <div>
            <label>Filter:</label>
            <select
              name="filter"
              onChange={(e) => handleInputChange(e)}
              value={databook.filter}
            >
              <option value="a1-a2">A1-A2</option>
              <option value="b1">B1</option>
              <option value="b2">B2</option>
              <option value="c1">C1</option>
            </select>
          </div>
          <div>
            <button type="submit" disabled={isUploadDataDisabled}>Uploaddata</button>
          </div>
        </form>
      </div>
      <form onSubmit={(e) => uploadToServer(e)} encType="multipart/form-data">
        <div>
          <input
            className="ml-2"
            type="file"
            id="file"
            name="file[]"
            multiple
            onChange={handleImageChange}
          />
          <div className="result">{renderPhotos(selectedFiles)}</div>
          <input type="submit" value="Upload" name=""></input>
        </div>
      </form>

      <div>
  {images.map((image, index) => (
    <div key={index}>
      <img src={image.file} alt={`Image ${index}`} />

      <p>Title: {image.title}</p>
      <p>Filter: {image.filter}</p>
      <p>Book Option: {image.bookoption}</p>
    </div>
  ))}
</div>
    </div>
  );
}

export default Homepage6;
