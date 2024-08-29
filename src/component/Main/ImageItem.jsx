import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function ImageItem({ image }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image?.src?.large;
    link.download = "image"; // Customize the filename here
    link.click();
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <LazyLoadImage
        src={image?.src?.large}
        alt={image?.photographer}
        className="w-full h-full object-cover cursor-pointer"
      />
      <div
        className={`absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}>
        <div className="flex justify-between">
          <div className="overlay-text">
            <FavoriteIcon className="text-white text-2xl" />
          </div>
          <div className="overlay-icons">
            <BookmarkBorderIcon className="text-white text-2xl" />
          </div>
        </div>
        <div className="flex justify-center">
          <ArrowDownwardIcon
            className="text-white text-2xl cursor-pointer"
            onClick={handleDownload}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageItem;
