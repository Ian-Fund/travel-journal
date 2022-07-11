import React from "react";
import data from "../data";
import "../CSS/Card.css";

export default function Card(props) {
  const locations = data.map((x) => {
    return <div>{x.location}</div>;
  });
  return (
    <div className="card">
      <img src={props.img} />
      <div className="journal--entry">
        <h1 className="title">{props.title}</h1>
        {props.location}
        {props.startDate}
        {props.endDate}
        {props.description}
      </div>
    </div>
  );
}

// {
//   title: "Mount Fuji",
//   location: "Japan",
//   googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//   startDate: "12 Jan, 2021",
//   endDate: "24 Jan, 2021",
//   description:
//     "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//   imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
