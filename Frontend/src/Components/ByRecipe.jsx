import React, { useState } from "react";
import Featured from "./Featured";
import { Fade } from "react-reveal";

function ByRecipe() {
  const [text, setText] = useState("");
  const [click, setClick] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setClick((click) => click ^ 1);
  };
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
      {click ? (
        <>
          <Featured />
          <Featured />
        </>
      ) : (
        <div className="h-[200px]"></div>
      )}
    </>
  );
}

export default ByRecipe;
