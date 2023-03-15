import React from "react";
import "../Style/Menu.css";
import menu1 from "../Aset/menu1.png";
import menu2 from "../Aset/menu2.jpg";
import menu3 from "../Aset/menu3.jpg";
import Component from "./Component";

function Menu() {
  return (
    <section id="Menu">
      <div className="component">
        <div className="Menu">
          <img src={menu1} />
          <div className="konten">
            <h2>COMPLETE PACKAGE</h2>
            <p>Ini merupakan paket komlit di sini </p>
          </div>
        </div>
        <div className="Menu">
          <img src={menu2} />
          <div className="konten">
            <h2>MAIN MENU HERE</h2>
            <p>Ini adlah salah satu menu utama </p>
          </div>
        </div>
        <div className="Menu">
          <img src={menu3} />
          <div className="konten">
            <h2>LEFT CAKE</h2>
            <p>Ini menu yg lumayan enak di antara yg lainnya</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
