import React from "react";
import { useOutletContext } from "react-router";

export default function HostRaccoonPhotos() {
  const raccoon = useOutletContext();
  return (
    <div>
      <img
        src={raccoon.imageUrl}
        width={160}
        style={{ borderRadius: "5px", margin: "25px 40px" }}
      />
    </div>
  );
}
