import React from "react";
import { ReactComponent as Search } from "./../search.svg";
import profile from "./../Ellipse.png";
import { Link } from "react-router-dom";

function Header({ name, title }) {
  return (
    <div className="flex flex-row items-center justify-between my-8">
      <div className="text-3xl font-medium">IIITB Outreach Portal</div>

      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center p-3 mr-3 bg-gray-200 rounded-3xl">
          <Search className="" />
          <div className="pl-2">Search for items</div>
        <div className="flex flex-row"><Link to="/dropdown"></Link></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
