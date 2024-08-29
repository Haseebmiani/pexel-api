import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import "./Search.css";
import { Link } from "react-router-dom";

function VideoItem({ videos }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="relative group">
        <Link to={`/search/video/${videos.id}`}>
          <LazyLoadImage
            src={videos?.image}
            alt={videos?.user?.name}
            className="w-full h-full object-cover"
            onClick={handleOpen}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <i>
              <PlayCircleFilledIcon className="text-white text-6xl" />
            </i>
          </div>
        </Link>
      </div>
    </>
  );
}

export default VideoItem;
