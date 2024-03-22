import React from "react";
import { useOutletContext } from "react-router";

export default function HostRaccoonDesc() {
  const raccoon = useOutletContext();
  return (
    <section className="host-raccoon-detail-info">
      <h4>
        Name: <span>{raccoon.name}</span>
      </h4>
      <h4>
        Category: <span>{raccoon.type}</span>
      </h4>
      <h4>
        Description: <span>{raccoon.description}</span>
      </h4>
      <h4>
        Category: <span>public</span>
      </h4>
    </section>
  );
}
