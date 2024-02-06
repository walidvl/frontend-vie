import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import ebook1 from "./ebook1.jpg";
import ebook2 from "./ebook2.jpg";
import ebook3 from "./ebook3.jpg";
import ebook4 from "./ebook4.jpg";
import ebook5 from "./ebook5.jpg";
import ebook6 from "./ebook1.jpg";
import ebook7 from "./ebook2.jpg";
import ebook8 from "./ebook3.jpg";
import ebook9 from "./ebook4.jpg";
import ebook10 from "./ebook5.jpg";

SwiperCore.use([Navigation, Pagination]);

const ProjectGallery = () => {
  const images = [
    ebook1,
    ebook2,
    ebook3,
    ebook4,
    ebook5,
    ebook6,
    ebook7,
    ebook8,
    ebook9,
    ebook10,
  ];


  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div>
      <style jsx>{`
        .custom-button-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 0px;
          width: 70px;
          margin-left: 60px;
          padding-top: 30px;
        }

        .custom-button {
          width: 46px;
          height: 46px;
          color: #5bc0de; /* Light blue color */
          background-color: #fff; /* White background */
          border: 3px solid #5bc0de; /* Light blue border */
          border-radius: 50%;
          margin-bottom: 8px; /* Add margin between buttons */
          display: flex;
          // align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 26px;
        }

        .prev-button {
          margin-right: 10px;
          matgin-left: 20px;
        }

      `}</style>
      <div className="projectgallery">
        <div className="projectgallery-project-info">
          <h2 className="projectgallery-h2">Explore More German Resources</h2>
          <h3 className="projectgallery-h3">Enhance Your Language Journey</h3>
          <p className="projectgallery-par">
            Learning German is an exciting journey, and we believe that one book
            is just the beginning. Explore additional resources to enhance your
            language skills and cultural understanding. Whether you're a
            beginner or an advanced learner, these similar e-books can
            complement your German learning adventure.
          </p>
          <div className="projectgallery-buttons">
            <div className="custom-button-container">
              <div className="custom-button prev-button" onClick={handlePrev}>
                &lt;
              </div>
              <div className="custom-button" onClick={handleNext}>
                &gt;
              </div>
            </div>
          </div>
        </div>
        <div className="projectgallery-swiper-container">
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={17}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
            loop={true} // Add the loop property
            modules={[Navigation, Pagination]}
            className="projectgallery-mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={`slide-${index}`}>
                <div className="projectgallery-swiper-image">
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    layout="responsive"
                    width={560} // Adjust according to your design
                    height={700} // Adjust according to your design
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
