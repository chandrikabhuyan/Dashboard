import React from "react";
import { ReactComponent as Search } from "./../search.svg";
import profile from "./../Ellipse.png";

function Header({ name, title }) {
  return (
    <div className="flex flex-row items-center justify-between my-8">
      <div className="text-3xl font-medium">IIITB Outreach Portal</div>

      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center p-3 mr-4 bg-gray-100 rounded-xl">
          <Search className="" />
          <div className="pl-2">Search for Opportunities</div>
        </div>

        <div>
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Header;
