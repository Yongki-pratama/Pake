import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Style/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classlist.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <h2>Online Shoping</h2>
        <nav ref={navRef}>
          <a href="/#Hero">Home</a>
          <a href="/#CardComponent">About</a>
          <a href="/#Component">My work</a>
          <a href="/#prodact">Prodacts</a>
          <a href="/#Menu">Menu</a>
          {/* <a href="/#">Blog</a>
          <a href="/#">Contact</a> */}
          <button className="btn btn--primary"> Sign Up</button>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn " onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
