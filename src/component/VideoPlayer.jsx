import React, { useRef, useEffect, useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

import PropTypes from "prop-types";

const VideoPlayer = ({ open, handleOpen, videoData, videos }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // Adjust video attributes based on screen size
      // You can modify this logic according to your requirements
      const screenWidth = window.innerWidth;

      if (screenWidth < 600) {
        videoRef.current.width = 300;
        videoRef.current.height = 200;
      } else {
        videoRef.current.width = 600;
        videoRef.current.height = 400;
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial video dimensions
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogBody>
        <video
          ref={videoRef}
          controls
          width={videoData.width}
          height={videoData.height}
          autoPlay
          preload="auto">
          <source src={videoData.link} type={videoData.file_type} />
          Your browser does not support the video tag.
        </video>
      </DialogBody>

      <div>
        <div>
          <div>
            {videos.map((video) => (
              <div key={video.id}>
                <video width="320" height="240" controls>
                  <source src={video.video_files[0].link} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>{video.user.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

VideoPlayer.propTypes = {
  videoData: PropTypes.shape({
    file_type: PropTypes.string.isRequired,
    fps: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    quality: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
};

export default VideoPlayer;
