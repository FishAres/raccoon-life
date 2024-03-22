import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getRaccoons } from "../../api";

// todo - better error handling
export default function Raccoon() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [raccoons, setRaccoons] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    async function loadRaccoons() {
      setLoading(true);
      try {
        const data = await getRaccoons();
        // console.log("getRaccoons data:", data);
        setRaccoons(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadRaccoons();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  const displayedRaccoons = typeFilter
    ? raccoons.filter((raccoon) => raccoon.type == typeFilter)
    : raccoons;

  const raccoonElements = displayedRaccoons.map((r) => (
    <div key={r.id} className="raccoon-title">
      <Link
        to={r.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
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
            className={`raccoon-type ${type}
            ${typeFilter === type ? "selected" : null}`}>
            {type}
          </button>
        ))}
        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="raccoon-type clear-filters">
            clear
          </button>
        )}
      </div>
      <div className="raccoon-list">
        {/* {raccoonElements.length > 0 ? raccoonElements : <p>No raccoons :(</p>} */}
        {raccoonElements}
      </div>
    </div>
  );
}
