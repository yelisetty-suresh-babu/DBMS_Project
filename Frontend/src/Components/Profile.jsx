import React from "react";
import Card from "./Card";
import Horizontal_card from "./Horizontal_card";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/store";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async () => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
    navigate("/login");
  };
  
  const nav = useNavigate();
  return (
    <>
      <div className="flex flex-col ">
        <button
          className="self-start ml-[3.5%] mb-[2%]"
          onClick={() => nav(-1)}
        >
          ← Back
        </button>
        <div className="flex m-3 justify-center">
          <img
            src="photos/profile_pic.jpeg"
            className="h-[450px] w-[500px] rounded-lg shadow-lg"
          />
          <div className="mr-[450px] self-center p-10 text-3xl font-serif ">
            <h1 className=" mb-3">Profile Name</h1>
            <h1>Email</h1>
            <h1 className=" mt-3 mb-3">Phone no</h1>
          </div>
        </div>
        <hr className="w-[80%] self-center " />
        <div className="self-center">
          <Horizontal_card />
          <Horizontal_card />
          <Horizontal_card />
          <Horizontal_card />
          <div className="flex justify-between ">
            <Link
              to="/addrecipe"
              className="bg-green-500 px-5 py-3 text-white rounded-xl ml-5 "
            >
              Add Recipe
            </Link>
            <button
              className="bg-red-500 px-4 mx-14 py-3 text-white rounded-xl"
              onClick={logout}
            >
              SignOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
