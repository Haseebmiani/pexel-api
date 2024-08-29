import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
      console.log("chunks: ", chunks);
    }
    return chunks;
  };

  const chunkedvideo = chunkArray(videos, 20);
  return (
    <div className=" grid mt-4  m-4">
      {chunkedvideo &&
        chunkedvideo.length > 0 &&
        chunkedvideo.map((columnvideo, columnIndex) => (
          <div key={columnIndex} className="grid grid-cols-3 gap-8 ">
            {columnvideo.map((video, videoIndex) => (
              <VideoItem key={videoIndex} videos={video} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default VideoList;
