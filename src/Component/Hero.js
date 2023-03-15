import React from "react";
import "../Style/Hero.css";
import img1 from "../Aset/img1.avif";

const Hero = () => {
  return (
    <section id="Hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <h5>Sep Hellon and Get Sharted With Us</h5>
              <h1>Enjoy Your Online and Shoping!</h1>
              <p>lorem ipsun is happiy shori and the shoping discon industri lorem ipsun is happiy shori and the shoping </p>
              <button className="btn btn--primary">Shep Now</button>
              <button className="btn btn--vidio">Witch Vidio</button>
            </div>
          </div>
          <div className="col">
            <img src={img1} alt="image 1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
