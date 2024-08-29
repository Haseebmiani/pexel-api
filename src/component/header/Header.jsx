import React from "react";
import SearchBar from "./SearchBar";
import Navbar1 from "./Navbar1";
const Header = () => {
  return (
    <>
      <header className="flex flex-col border bg-amber-100  h-96">
        <div>
          <Navbar1 />
          <SearchBar />
        </div>
        <div>{/* <CategoryNavbar /> */}</div>
      </header>
    </>
  );
};

export default Header;
