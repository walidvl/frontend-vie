import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";

const Intro4 = ({ sliderRef, blackStar }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1 style={{ fontSize: '77px'}}>
                <span className="color-font">Discover the Art of  Learning</span>   Deutsch Through
                 <span className="color-font">Creative Thinking</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
