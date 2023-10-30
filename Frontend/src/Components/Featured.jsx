import React, { useEffect } from "react";
import Card from "./Card";
function Featured() {
  useEffect(()=>
  {
    
  },[]);
  return (
    <>
      <div className="flex items-center justify-center ml-20 ">
        <div className="grid grid-cols-3 self-center ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

    </div>

    </>
  );
}

export default Featured;
