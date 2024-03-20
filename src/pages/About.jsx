import React from "react";
import { Link } from "react-router-dom";
import hero_img from "../../public/assets/about-hero.jpg";

export default function About() {
  return (
    <div className="about-page-container">
      <img src={hero_img} className="about-hero-image" />
      <div className="about-page-content">
        <h1>No roadtrip is a boon without a raccoon</h1>
        <p>
          Our mission is to make your road trip worthwhile with the perfect
          travel companion rental. Raccoons are fed and jacked before each trip
          to ensure maximum raccoon.
        </p>
        <p>
          Our team is full of raccoon enthusiasts who know how life is best
          enjoyed. With a raccoon.
        </p>
        <div className="about-page-cta">
          <h2>
            Your destination is waiting. <br />
            Your raccoon is ready.
          </h2>
          <Link className="link-button" to="/mans">
            Explore mans
          </Link>
        </div>
      </div>
    </div>
  );
}
