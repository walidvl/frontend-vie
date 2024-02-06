/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBooks = async () => {
    try {
      const url = searchQuery
        ? `http://127.0.0.1:8000/api/books/search?query=${searchQuery}`
        : "http://127.0.0.1:8000/api/books";

      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.files);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    // Initialize Isotope after updating books data
    initIsotope();
  }, [books]);



  useEffect(() => {
    // Fetch books data when searchQuery changes
    const timer = setTimeout(() => {
      fetchBooks();
    }, 500); // Adding a delay to reduce API requests while typing

    return () => clearTimeout(timer);
  }, [searchQuery]);
  console.log(books);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h3 className="wow color-font">
                  Our Recent Web Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}  style={{

                    height: "1200", // Adjust the width as needed}
                  }}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: "8px",
                    borderRadius: "17px",
                    border: "1px solid #ccc",
                    marginRight: "10px",
                    width: "200px", // Adjust the width as needed}
                  }}
                />
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".a1-a2">A1-A2</span>
                <span data-filter=".b1">B1</span>
                <span data-filter=".b2">B2</span>
                <span data-filter=".c1">C1</span>
              </div>
            </div>
          )}

          <div className="gallery full-width">
            {books.map((book, index) => (
              <div
                key={index}
                className={`${
                  grid === 3
                    ? "col-lg-4 col-md-6"
                    : grid === 2
                    ? "col-md-6 lg-mr"
                    : "col-12"
                } items ${book.filter} wow fadeInUp`}
                data-wow-delay=".4s"
              >
                <div className="item-img">
                  <Link href={`/project-details2/${book.title}`}>
                    <a className="imago wow">
                      <img src={book.file} alt="image" />
                      <div className="item-img-overlay"></div>
                    </a>
                  </Link>
                </div>
                <div className="cont">
                  <h6>{book.title}</h6>
                  <span>
                    <Link href="/works/works-dark">Design</Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
