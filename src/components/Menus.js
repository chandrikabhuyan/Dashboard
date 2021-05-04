import React from "react";
import { ReactComponent as Meetings } from "./../network.svg";
import { ReactComponent as Home } from "./../home.svg";
import { ReactComponent as Projects } from "./../opportunities.svg";
import { Link } from "react-router-dom";
const Menus = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        <Home />
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/"
        >
          Home
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        <Projects />
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/projects"
        >
          Projects
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        <Meetings className="h-8"/>
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/meetings"
        >
          Meetings
        </Link>
      </div>
    </div>
  );
};

export default Menus;
