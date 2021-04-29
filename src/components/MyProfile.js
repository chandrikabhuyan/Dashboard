import React from "react";
import profile from "./../Ellipse.png";
import { ReactComponent as Search } from "./../mail.svg";
import Layout from "./layout";
const MyProfile = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div>
          <img src={profile} alt="profile" className="w-56 h-56" />
        </div>
        <div className="mt-4 text-2xl font-medium">Chandrika Bhuyan</div>
        <a href="mailto:chandrika.bhuyan@iiitb.org">
          <div className="flex flex-row items-center p-2 px-3 mt-3 bg-gray-300 appearance-none group-hover:bg-gray-600 rounded-xl">
            <Search className="h-4" />
            <div className="pl-2">Email-id</div>
          </div>
        </a>
      </div>

      <div className="grid grid-cols-2 gap-8"></div>
    </Layout>
  );
};

export default MyProfile;
