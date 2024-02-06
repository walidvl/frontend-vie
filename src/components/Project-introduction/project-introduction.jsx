import React from "react";

const ProjectIntroduction = ( ) => {

  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>01 </span> Introduction
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <p className="extra-text">
              Explore our expertly crafted e-books to boost German skills and excel in language tests. Each book offers a comprehensive learning experience, covering grammar essentials to vocabulary enrichment. Immerse yourself in German language learning with engaging content designed for all levels.              </p>
              <ul className="smp-list mt-30">
                <li>Master German grammar with clear explanations and practical examples</li>
                <li>Expand your vocabulary for effective communication in real-life scenarios</li>
                <li>Explore authentic German culture and language nuances in every book</li>
                <li>Boost exam readiness with targeted exercises for confidence and performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntroduction;
