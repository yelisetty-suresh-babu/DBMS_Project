import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const isloggedin = useSelector((state) => state.isLoggedIn);
  const t = () => {
    setShow((show) => show ^ 1);
  };
  useEffect(() => {
    console.log(localStorage.getItem("userId"));
  }, []);
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
          {isloggedin  ? (
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
