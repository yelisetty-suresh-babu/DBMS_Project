/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function Horizontal_card(props) {
  const link_to = `/recipe/${props.val}`;
  console.log(props);
  const temp= async()=>
  {

  }
  return (
    <>
      <Link to={link_to} key={props.name}  className="bg-orange-100 w-[1200px] h-[100px] m-4 rounded-xl flex items-center justify-around font-serif shadow-lg">
        <img
          src="photos/chicken_tikka.jpeg"
          alt=""
          className="rounded-full h-[75px] "
        />
        <h1 className="text-2xl">{props.name}</h1>
        <div className="flex gap-x-20">
          <button className="bg-green-500 px-5 py-2 text-white rounded-xl ">
            Edit
          </button>
          <button className="bg-red-500 px-5 py-2 text-white rounded-xl " 
          onClick={}
          >
            Delete
          </button>
        </div>
      </Link>
    </>
  );
}

export default Horizontal_card;
