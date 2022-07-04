import React from "react";
import data from "../data";

export default function Card() {
  const locations = data.map((x) => {
    return <div>{x.location}</div>;
  });
  return <div>{locations}</div>;
}
