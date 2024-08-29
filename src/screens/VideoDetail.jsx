import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoPlayer from "../component/VideoPlayer";
import axios from "axios";
import Loading from "../component/Main/Loading";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = `https://api.pexels.com/videos/videos/${id || ""}`;
  const API_TOKEN = " OjaNZhrTEHtlp9rVpZDvRQzusRuiWuuo2Vr9cdrBPAeMsiIt4Gwit5nX";

  useEffect(() => {
    const getVideo = async () => {
      setLoading(true);
      const { data } = await axios.get(API_URL, {
        headers: {
          Authorization: API_TOKEN,
        },
      });

      console.log(data);
      setVideo(data);
      setLoading(false);
    };

    getVideo();
  }, []);
  if (loading) {
    return <Loading />;
  }

  const videoData = video.video_files;

  return (
    <>
      {video && video.video_files && video.video_files.length > 0 ? (
        <div className="w-1/2 h-screen mx-auto mt-10 border-spacing-8 ">
          <video
            ref={video.video_files[0]}
            controls
            width={video.video_files[0].width}
            height={video.video_files[0].height}
            autoPlay
            preload="auto">
            <source
              src={video.video_files[0].link}
              type={video.video_files[0].file_type}
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <p>Data not found!</p>
      )}
    </>
  );
};

export default VideoDetail;
