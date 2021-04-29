import React from "react";
import profile from "./../Ellipse.png";
import { Link } from "react-router-dom";
import { ReactComponent as Message } from "./../search.svg";

const MyProfile = () => {
    return(
        <div>
            <div class="content-center" >
                <div>
                    <img src={profile} alt="profile"/>
                </div>
                <div className="ml-14 text-2xl font-medium">Chandrika Bhuyan</div>
            </div>
            <div className="flex flex-row mt-3 group-hover:bg-gray-600">
                <Message />
                <Link
                    className="pl-2 text-xl text-gray-800 appearance-none"
                    tag="a"
                    to="/"
                >
                    Email-id
                </Link>
            </div>
        </div>
    )
}

export default MyProfile;