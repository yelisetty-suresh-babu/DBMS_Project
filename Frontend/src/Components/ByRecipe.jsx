import React, { useEffect, useState } from "react";
import Featured from "./Featured";
import { Fade } from "react-reveal";
import axios from "axios";
import Card from "./Card";

function ByRecipe() {
  const [text, setText] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  useEffect(() => {
    const temp = async () => {
      const res = await axios.post("http://localhost:4000/api/recipes/name", {
        Name: text,
      });
      setRecipes(res.data);
      console.log(res.data);
    };
    temp();
  }, [submit]);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center m-10 gap-x-2 fade-up-element "
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="shadow-lg w-1/2 p-3 pl-5 text-lg rounded-lg border-[1px] border-gray-300 "
          placeholder="   🔍  Enter the Recipe "
          name="temp_val"
        />
      </form>
      {submit ? (
        <>
          <div className="grid grid-cols-3 self-center ml-10">
            {recipes.map((data) => {
              return (
                <Card
                  key={data._id}
                  Name={data.Name}
                  url={data.url}
                  val={data._id}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="h-[200px]"></div>
      )}
    </>
  );
}

export default ByRecipe;
