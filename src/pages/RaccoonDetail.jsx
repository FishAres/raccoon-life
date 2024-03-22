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

  if (!raccoon) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="raccoon-detail-container">
      <div className="raccoon-detail">
        <img src={raccoon.imageUrl} width={400} height={400} />
        <i className={`raccoon-type ${raccoon.type} selected`}>
          {raccoon.type}
        </i>
        <p className="raccoon-price">
          <span>{raccoon.price}</span>/day
        </p>
        <p>{raccoon.description}</p>
        <button className="link-button">Rent this raccoon</button>
      </div>
    </div>
  );
}
