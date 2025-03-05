import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            I'm baby shabby chic pabst gatekeep, fam gentrify flannel yuccie
            whatever pour-over prism typewriter. Gluten-free tofu art party tonx
            semiotics hot chicken retro activated charcoal mustache lomo
            intelligentsia pork belly umami. Fingerstache vegan pickled, flannel
            chambray mustache humblebrag poutine salvia shoreditch pok pok.
            Biodiesel chambray knausgaard, cornhole unicorn waistcoat twee lo-fi
            green juice banh mi vexillologist leggings chillwave organic
            humblebrag.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
