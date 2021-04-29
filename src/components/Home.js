import React from "react";
import rect from "./../rect.png";
import Menu from "./Menus";
import Header from "./Header";
import { Container } from "reactstrap";
const Home = () => {
  return (
    <Container>
      <Header />
      <div className="grid gap-12 grid-col-12">
        <div className="col-start-1 col-end-5">
          <Menu />
        </div>
        <div className="col-start-7 col-end-13">
          <h1 className="mt-4 mb-8 text-4xl font-bold">Latest Posts</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col p-3 bg-gray-200 rounded-lg">
              <img src={rect} alt="imager" className="aspect-w-16 aspect-h-9" />
              <div className="mt-3 text-lg font-medium">Cisco thinQbator</div>
              <div>Cisco</div>
              <div className="text-gray-400">Posted on 30/12/20</div>
              <div className="font-medium text-prim-blue">10 days left</div>
            </div>

            <div className="flex flex-col p-3 bg-gray-200 rounded-lg">
              <img src={rect} alt="imager" className="aspect-w-16 aspect-h-9" />
              <div className="mt-3 text-lg font-medium">Cisco thinQbator</div>
              <div>Cisco</div>
              <div className="text-gray-400">Posted on 30/12/20</div>
              <div className="font-medium text-prim-blue">10 days left</div>
            </div>
            <div className="flex flex-col p-3 bg-gray-200 rounded-lg">
              <img src={rect} alt="imager" className="aspect-w-16 aspect-h-9" />
              <div className="mt-3 text-lg font-medium">Cisco thinQbator</div>
              <div>Cisco</div>
              <div className="text-gray-400">Posted on 30/12/20</div>
              <div className="font-medium text-prim-blue">10 days left</div>
            </div>
            <div className="flex flex-col p-3 bg-gray-200 rounded-lg">
              <img src={rect} alt="imager" className="aspect-w-16 aspect-h-9" />
              <div className="mt-3 text-lg font-medium">Cisco thinQbator</div>
              <div>Cisco</div>
              <div className="text-gray-400">Posted on 30/12/20</div>
              <div className="font-medium text-prim-blue">10 days left</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
