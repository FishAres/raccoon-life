import React from "react";
import { useOutletContext } from "react-router";

export default function HostRaccoonPrice() {
  const raccoon = useOutletContext();
  return (
    <section className="host-raccoon-detail-info">
      <h4
        style={{
          marginLeft: "51px",
          width: "119px",
          height: "22px",
          top: "119px",
          fontSize: "22px",
        }}>
        ${raccoon.price}
        <span>/day</span>
      </h4>
    </section>
  );
}
