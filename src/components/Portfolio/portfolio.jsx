/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Portfolio = ({ grid, filterPosition }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books data when component mounts
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books");
      const data = await response.json();
      setBooks(data.files);
      console.error(data.files);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    // Initialize Isotope after updating books data
    initIsotope();
  }, [books]);

  return (
    <section className="portfolio section-padding pb-70">
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
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
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
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".a1-a2">A1-A2</span>
              <span data-filter=".b1">B1</span>
              <span data-filter=".b2">B2</span>
              <span data-filter=".c1">C1</span>
            </div>
          </div>

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
                  <Link href={`/project-details2/project-details2-light`}>
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

export default Portfolio;