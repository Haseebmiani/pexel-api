import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/photos/${keyword}`);
  };

  return (
    <div>
      <div className="  absolute  text-center m-4   w-7/12  ml-64 text-white ">
        <p className=" text-3xl m-3 text-black">
          The best free stock photos, royalty free images & videos shared by
          creators.
        </p>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="w-96 p-2 bg-white text-black  rounded-md outline-none"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search for images... "
          />
          <button type="submit" className="  bg-black rounded w-20 h-10">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
