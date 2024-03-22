import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import BetterLink from "../../components/BetterLink";

export default function HostRaccoonDetail() {
  const params = useParams();
  const [raccoon, setRaccoon] = React.useState(null);
  const id = params.id;
  React.useEffect(() => {
    fetch(`/api/host/raccoons/${id}`)
      .then((res) => res.json())
      .then((data) => setRaccoon(data.raccoons));
  }, [params.id]);

  if (!raccoon) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="host-raccoon-detail-container">
        <Link to=".." relative="path" className="back-button">
          {/* relative=path specifies it's relative to the path and not the app route hierarchy */}
          &larr; <span> Back to your raccoons</span>
        </Link>
        <div className="host-raccoon-detail">
          <img src={raccoon.imageUrl} width={400} />
          <div className="host-raccoon-info">
            <i className={`raccoon-type raccoon-type-${raccoon.type}`}>
              {raccoon.type}
            </i>
            <h3>{raccoon.name}</h3>
            <h4>{`${raccoon.price}/day`}</h4>
          </div>
        </div>
        <nav className="host-raccoon-nav">
          <BetterLink to="." end>
            Details
          </BetterLink>
          <BetterLink to="pricing">Pricing</BetterLink>
          <BetterLink to="photos">Photos</BetterLink>
        </nav>
        <Outlet context={raccoon} />
      </div>
    </>
  );
}
