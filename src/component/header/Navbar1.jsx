import React from "react";
import { Link } from "react-router-dom";
const Navbar1 = () => {
  return (
    <div className="flex justify-between m-4 ">
      <Link to="/">
        <div className=" text-black text-6xl">PEXEL</div>
      </Link>
    </div>
  );
};

export default Navbar1;
