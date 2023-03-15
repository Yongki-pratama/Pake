import React from "react";
import "../Style/Component.css";
import img2 from "../Aset/img2.jpg";

const Component = () => {
  return (
    <section id="Component">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={img2} alt="image 1" />
          </div>
          <div className="col">
            <div className="card">
              <h6>About</h6>
              <h2>Welcome to Our Online Shoping.com</h2>
              <p className="paragraf">lorem ipsun is happiy shori and the shoping discon industri lorem ipsun is happiy shori and the shoping lorem ipsun is happiy shori and the shoping discon</p>
              <p>lorem ipsun is happiy shori and the shoping discon industri lorem ipsun is happiy shori and</p>
              <button className="btn btn--primary">Shep Now</button>
              <button className="btn btn--vidio">Witch Vidio</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
