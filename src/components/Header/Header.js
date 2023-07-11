import React from "react";
import Sinha from "../../asests/Images/sinha.png";

const Header = () => {
  return (
    <section className="hero is-small is-info">
      <div className="hero-body">
        <div style={{display:"flex"}}>
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src={Sinha} alt="Logo"/>
          </a>
        </div>
          <div className="container has-text-centered">
            <h1 className="title">Random Password Generator</h1>
            <h2 className="subtitle">
              A simple tool to generate random <strong>Password</strong> strings
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default Header;
