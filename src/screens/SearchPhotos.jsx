import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageList from "../component/Main/ImageList";
import SearchButton from "./SearchButton";
import { Button } from "@material-tailwind/react";
import Loading from "../component/Main/Loading";

const SearchPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const parmas = useParams();
  const keywords = parmas.keywords || "";

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.pexels.com/v1/search?query=${keywords}&per_page=60`,
        {
          headers: {
            Authorization:
              "OjaNZhrTEHtlp9rVpZDvRQzusRuiWuuo2Vr9cdrBPAeMsiIt4Gwit5nX",
          },
        }
      );
      setPhotos(data.photos);
      setIsLoading(false);
      console.log("data: ", data);
    };

    fetchData();
  }, [keywords]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    !isLoading && (
      <>
        <SearchButton keywords={keywords} />
        {photos && photos.length > 0 ? (
          <ImageList data={photos} />
        ) : (
          <div className="  w-5/6">
            <h3 className=" text-4xl mt-10 ">
              We couldn’t find anything for "{keywords}" Try to refine your
              search.
            </h3>

            <Button variant="filled" className="m-3">
              <Link to="/">Go to Home</Link>
            </Button>
          </div>
        )}
      </>
    )
  );
};

export default SearchPhotos;
