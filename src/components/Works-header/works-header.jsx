import React from "react";
import fadeWhenScroll from "../../common/fadeWhenScroll";

const WorksHeader = ({ sliderRef }) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .capt .parlx"));
  }, []);
  return (
    <header
      ref={sliderRef}
      className="works-header fixed-slider hfixd valign sub-bg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center">
                <h1 className="color-font">GERMAN E-BOOKS</h1>
                <p>
                Embark on a knowledge-filled journey within our meticulously curated German E-BOOKS collection, exploring the language, culture, and literature like never before
                </p>
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width">Works</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorksHeader;
