import React from "react";
import { Link } from "react-router-dom";

export default function Raccoon() {
  const [raccoons, setRacoons] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/raccoons")
      .then((res) => res.json())
      .then((data) => setRacoons(data.raccoons));
  }, []);

  const raccoonElements = raccoons.map((r) => (
    <div key={r.id} className="raccoon-title">
      <Link to={r.id}>
        <img src={r.imageUrl} />
        <div className="racoon-info">
          <h3>{r.name}</h3>
          <p>
            ${r.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`raccoon-type ${r.type} selected`}>{r.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="raccoon-list-container">
      <h1>Explore our raccoons</h1>
      <div className="raccoon-list">{raccoonElements}</div>
    </div>
  );
}
