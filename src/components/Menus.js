import React from "react";
import { ReactComponent as Network } from "./../coolicon.svg";
import { ReactComponent as Home } from "./../home.svg";
import { ReactComponent as Opportunities } from "./../opportunities.svg";
import { ListGroup, ListGroupItem } from "reactstrap";
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
          <Opportunities />
          <Link
            className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
            tag="a"
            to="/opportunities"
          >
            Opportunities
          </Link>
        </div>
        <div className="flex flex-row mt-4 group-hover:bg-gray-600">
          <Network />
          <Link
            className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
            tag="a"
            to="/"
          >
            My Network
          </Link>
        </div>
       </div>
  );
};

export default Menus;
