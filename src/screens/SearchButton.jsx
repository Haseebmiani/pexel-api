import React from "react";
import { Button } from "@material-tailwind/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SearchButton = ({ keywords }) => {
  return (
    <div className=" mt-20 m-5">
      <Link to={"/"}>
        <h5 className=" flex flex-wrap  m-8  text-xl text-blue-900 ">
          <ArrowBackIcon />
        </h5>
      </Link>
      <div>
        <a href="#buttons-with-link">
          <Button variant="outlined">PHOTOS</Button>
        </a>
        <Link to={`/search/videos/${keywords}`}>
          <a href="#buttons-with-link">
            <Button variant="outlined" className="ml-3">
              VIDEOS
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SearchButton;
