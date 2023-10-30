import React, { useState } from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [stat, setStat] = useState("");
  const [procedure, setProcedure] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [temp, setTemp] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIngredients(temp.split(","));
    console.log(ingredients, procedure);
  };
  return (
    <Fade bottom  className="">
      <button className="self-start ml-[3.5%] mb-[2%]" onClick={() => nav(-1)}>
        ← Back
      </button>
      <div className="self-start ml-[3.5%] mb-[2%] text-3xl font-serif">
        Enter the Details
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[90%] bg-white h-fit  shadow-xl  rounded-xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  h-full items-start justify-between p-5 font-serif"
          >
            <div className="mb-5">
              <p htmlFor="url" className="ml-5 m-4 text-2xl ">
                Name of the Dish
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[425%] mx-4 h-16 rounded-xl border-[1px] px-4 text-xl text-start border-black"
                placeholder="Enter the name"
                name="url"
              />
            </div>

            <div className="mb-7">
              <p htmlFor="url" className="ml-5 m-4 text-2xl">
                Image Url
              </p>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-[425%] mx-4 h-16 rounded-xl border-[1px] px-4 text-xl text-start border-black"
                placeholder="Enter the Url"
                name="url"
              />
            </div>

            <div className="mb-7">
              <p htmlFor="url" className="ml-5 m-4 text-2xl">
                Veg or Non-Veg
              </p>
              <input
                type="text"
                value={stat}
                onChange={(e) => setStat(e.target.value)}
                className="w-[425%] mx-4 h-16 rounded-xl border-[1px] px-4 text-xl text-start border-black"
                placeholder="Enter the Option"
                name="url"
              />
            </div>

            <div className="mb-7">
              <p htmlFor="url" className="ml-5 m-4 text-2xl">
                Ingredients
              </p>
              <textarea
                type="text"
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
                className="w-[413%] mx-4 h-16 rounded-xl border-[1px] px-4 pt-4 text-xl text-start border-black"
                placeholder="Enter the Ingredients"
                style={{}}
                name="url"
              />
            </div>

            <div className="mb-7">
              <p htmlFor="url" className="ml-5 m-4 text-2xl">
                Cooking Procedure
              </p>
              <textarea
                type="text"
                value={procedure}
                onChange={(e) => setProcedure(e.target.value)}
                className="w-[413%] mx-4 h-16 rounded-xl border-[1px] px-4 pt-4 text-xl text-start border-black"
                placeholder="Enter the Cooking Procedure"
                style={{}}
                name="url"
              />
            </div>

            <button
              type="submit"
              className="ml-4 w-[200px] inline-block px-2 py-2 mt-2 text-white bg-blue-600 rounded-xl hover:bg-blue-700 "
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    </Fade>
  );
}

export default AddRecipe;
