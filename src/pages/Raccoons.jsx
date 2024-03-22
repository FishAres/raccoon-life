import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Raccoon() {
  const [raccoons, setRacoons] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/raccoons")
      .then((res) => res.json())
      .then((data) => setRacoons(data.raccoons));
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const displayedRaccoons = typeFilter
    ? raccoons.filter((raccoon) => raccoon.type == typeFilter)
    : raccoons;

  const raccoonElements = displayedRaccoons.map((r) => (
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

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const raccoonTypes = ["simple", "rugged", "luxury"];

  return (
    <div className="raccoon-list-container">
      <h1>Explore our raccoons</h1>
      <div className="raccoon-list-filter-buttons">
        {raccoonTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleFilterChange("type", type)}
            className={`raccoon-type ${type}`}>
            {type}
          </button>
        ))}
        <button
          onClick={() => handleFilterChange("type", null)}
          className="raccoon-type clear-filters">
          clear
        </button>
      </div>
      <div className="raccoon-list">{raccoonElements}</div>
    </div>
  );
}
