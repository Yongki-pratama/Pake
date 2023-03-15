import React from "react";
import "../Style/CardComponent.css";
import logo1 from "../Aset/logo1.png";
import logo2 from "../Aset/logo2.png";
import logo3 from "../Aset/logo3.png";

const CardComponent = () => {
  return (
    <section id="CardComponent">
      <div className="containe">
        <div className="rows">
          <div className="cols">
            <div className="cards">
              <img src={logo1} alt="free shipping" />
              <h4>FREE SHIPPING</h4>
              <p>lorem ipsun is happiy shori and the shoping discon industri lorem ipsuns </p>
            </div>
          </div>
          <div className="cols">
            <div className="cards">
              <img src={logo2} alt="satisfaction" />
              <h4>100% SATISFACTION</h4>
              <p>lorem ipsun happiy shori and the shoping discon industri lorem ipsun iindustri</p>
            </div>
          </div>
          <div className="cols">
            <div className="cards">
              <img src={logo3} alt="easy return" />
              <h4>EASY RETURN</h4>
              <p>lorem ipsun is happiy shori and the shoping discon industri lorem ipsunindustri </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
