import React from "react";
import NavPage from "./NavPage";
import "./Navigation.css";

const Navigation = ({ pages }) => {
  return (
    <div className="navigation">
      {pages.map(page => (
        <NavPage key={page} page={page} />
      ))}
    </div>
  )
}

export default Navigation;