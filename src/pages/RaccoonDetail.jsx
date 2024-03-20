import React from "react";
import { useParams } from "react-router-dom";

export default function RaccoonDetail() {
  const params = useParams();
  const [raccoon, setRaccoon] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/raccoons/${params.id}`)
      .then((res) => res.json())
      .then((data) => setRaccoon(data.raccoons));
  }, [params.id]);
  return (
    <div className="raccoon-detail-container">
      {raccoon ? (
        <div className="raccoon-detail">
          <img src={raccoon.imageUrl} />
          <i className={`raccoon-type ${raccoon.type} selected`}>
            {raccoon.type}
          </i>
          <p className="raccoon-price">
            <span>{raccoon.price}</span>/day
          </p>
          <p>{raccoon.description}</p>
          <button className="link-button">Rent this raccoon</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
