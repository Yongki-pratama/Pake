import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CardComponent from "./CardComponent";
import Component from "./Component";
import Prodacts from "./Prodact";
import Menu from "./Menu";

function Home() {
  return (
    <body>
      <div className="Container">
        <Navbar />
        <Hero />
        <CardComponent />
        <Component />
        <Prodacts />
        <Menu />
      </div>
    </body>
  );
}

export default Home;
