import React from "react";
import "../CSS/Header.css";
import globe from "../pngegg.png";

export default function Header() {
  return (
    <div className="banner">
      <img src={globe} />
      <h1 className="title">my travel journal</h1>
    </div>
  );
}
