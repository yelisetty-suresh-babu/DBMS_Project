import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
function Header() {
  const [show, setShow] = useState(false);
  const t = () => {
    setShow((show) => show ^ 1);
  };
  return (
    <Fade top>
      <div className="flex justify-between px-[50px] py-8">
        <Link to="" className="font-serif text-xl">
          Random text
        </Link>
        <div className="flex gap-x-20 font-serif  text-lg">
          <div className="flex gap-x-6">
            <Link to="/byrecipe">Recipe by Name</Link>
            <Link to="/byingredient">Recipe by Ingredients</Link>
          </div>
          {show ? (
            <Link to="/profile" className="">
              Profile
            </Link>
          ) : (
            <Link to="/login" className="" onClick={t}>
              Login/Sign Up
            </Link>
          )}
        </div>
      </div>
    </Fade>
  );
}

export default Header;
