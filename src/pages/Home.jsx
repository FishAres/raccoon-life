import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>You got travel tunes, we got travel raccoons</h1>
      <p>Add adventure to your life by joining #RaccoonLife</p>
      <Link to="mans">Find your raccoon</Link>
    </div>
  );
}
