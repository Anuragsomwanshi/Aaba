import React from "react";
import "./Home.css";
import hero from "../../assets/h1.jpg";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <>
      {" "}
      <div id="Home" className="Home">
        <img className="heroimg" src={hero} alt="" />

        <div className="wrap">
          <button className="get">Get In Touch {">>"} </button>
          <div className="txt">LOOK STYLISH AS YOUR WISH</div>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
      
    </>
  );
};

export default Home;
