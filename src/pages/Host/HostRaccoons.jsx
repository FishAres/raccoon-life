import React from "react";
import { Link } from "react-router-dom";

export default function Raccoons() {
  const [raccoons, setRacoons] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/host/raccoons")
      .then((res) => res.json())
      .then((data) => setRacoons(data.raccoons));
  }, []);

  const raccoonElements = raccoons.map((r) => (
    <div key={r.id} className="raccoon-title">
      <Link to={r.id}>
        <img src={r.imageUrl} width={400} height={400} />
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

  if (raccoons.length < 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      <div className="raccoon-list-container">
        <h1>Your raccoons</h1>
        <div className="raccoon-list">{raccoonElements}</div>
      </div>
    </section>
  );
}
