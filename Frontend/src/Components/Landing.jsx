import React, { useEffect } from "react";
import Featured from "./Featured";
import Special from "./Special";
function Landing() {
  
  return (
    <div className="flex flex-col gap-10  items-center ">
      <Special />
      <Featured />
      {/* <Featured /> */}
    </div>
  );
}

export default Landing;
