import { ImageList } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import VideoList from "./VideoList";

const SearchVidoes = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const keywords = params.keywords || "";

  const API_URL = `https://api.pexels.com/videos/search?query=${keywords}&per_page=60`;
  const API_TOKEN = " OjaNZhrTEHtlp9rVpZDvRQzusRuiWuuo2Vr9cdrBPAeMsiIt4Gwit5nX";

  useEffect(() => {
    const fetchkeyword = async () => {
      const { data } = await axios.get(API_URL, {
        headers: {
          Authorization: API_TOKEN,
        },
      });
      console.log(data);
      setData(data?.videos);
    };
    fetchkeyword();
  }, [keywords]);
  return (
    <VideoList videos={data} />

    // <div className="flex ">

    //   {data && data.length > 0 ? (
    //     data.map((video) => (
    //       <div key={video.id}>
    //         {/* <ReactPlayer url={video.video_files[0].link} controls /> */}
    //         <ReactPlayer url={video.video_files[0].link} controls />
    //       </div>
    //     ))
    //   ) : (
    //     <p>data not found</p>
    //   )}
    // </div>
  );
};

export default SearchVidoes;
