import React, { useEffect, useState } from "react";
import ImageList from "../component/Main/ImageList";
import axios from "axios";
import Loading from "../component/Main/Loading";

const HomeScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = "https://api.pexels.com/v1/curated?page=1&per_page=60";
  const API_TOKEN = "OjaNZhrTEHtlp9rVpZDvRQzusRuiWuuo2Vr9cdrBPAeMsiIt4Gwit5nX";

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const { data } = await axios.get(API_URL, {
        headers: {
          Authorization: API_TOKEN,
        },
      });
      console.log(data);
      setPhotos(data?.photos);
      setLoading(false);
    };

    fetchPhotos();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return photos && photos.length > 0 ? (
    <div className="w-11/12 mx-auto">
      <h2 className="flex m-8 text-5xl ">Free Stock Photos</h2>
      <ImageList data={photos} />
    </div>
  ) : (
    <p>Soory!... Photos are not found!</p>
  );
};

export default HomeScreen;
