import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ImageList from "../component/Main/ImageList";
import Loading from "../component/Main/Loading";

import HomeScreen from "./HomeScreen";

function Category() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const parmas = useParams();
  const category = parmas.category || "";

  console.log("catg: ", parmas);

  useEffect(() => {
    const FetchProduct = async () => {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.pexels.com/v1/search/?page=1&per_page=60&query=${category}`,
        {
          headers: {
            Authorization:
              "OjaNZhrTEHtlp9rVpZDvRQzusRuiWuuo2Vr9cdrBPAeMsiIt4Gwit5nX",
          },
        }
      );
      setImages(data.photos);
      setLoading(false);
    };

    FetchProduct();
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  return images && images.length > 0 ? (
    <div className="w-11/12 mx-auto">
      <h3 className=" m-10 flex justify-center text-4xl capitalize ">
        {category}
      </h3>

      <ImageList data={images} />
    </div>
  ) : (
    <p>Data not found!</p>
  );
}

export default Category;
