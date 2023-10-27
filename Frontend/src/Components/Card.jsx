import React from "react";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

function Card() {
  
  return (
    <Link to="/recipe">
      <Fade bottom  className=" rounded-3xl ">
        <div className=" h-[300px] border-black  w-[500px] m-3 rounded-3xl ">
          <img
            src="/photos/chicken_tikka.jpeg "
            className="h-3/4 w-3/4 rounded-3xl shadow-lg"
          />
          <div className="p-4">
            <p className="font-serif text-lg"> Chicken Tikka masala</p>
            <p className="font-serif text-md">Non-Veg</p>
          </div>
        </div>
      </Fade>
    </Link>
  );
}

export default Card;
