import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name,title}){
    return (
        <div>
            <Card className="my-1 bg-info">
                <CardBody>
                    <h1 className="text-center my-2">Welcome to IIITB Outreach Portal</h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;