import React from "react";
import { Fade } from "react-reveal";

function Footer() {
  return (
    <Fade bottom big>
      <div className="w-screen h-[200px] bg-orange-50 mt-40 rounded-xl bottom-0  flex  items-center justify-around ">
        <div>
          <p>Project Done by :</p>
        </div>
        <div className=" flex items-center justify-center flex-col">
          <div className="flex items-center justify-center gap-x-4 p-5  ">
            <img src="../../public/photos/facebook.gif" className="h-[50px] " />
            <img src="../../public/photos/instagram.gif" className="h-[50px] " />
            <img src="../../public/photos/youtube.gif" className="h-[50px] " />
            <img src="../../public/photos/twitter.gif" className="h-[50px] " />
          </div>
          <p>DBMS Project</p>
        </div>
      </div>
    </Fade>
  );
}

export default Footer;
