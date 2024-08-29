import React from "react";
import ImageItem from "./ImageItem";

//  total images = 60

function ImageList({ data }) {
  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
      console.log("chunks: ", chunks);
    }
    return chunks;
  };

  // Assuming data is an array of 60 images
  const chunkedData = chunkArray(data, 20);

  return (
    <div className="grid grid-cols-3 gap-8">
      {chunkedData &&
        chunkedData.length > 0 &&
        chunkedData.map((columnData, columnIndex) => (
          <div key={columnIndex} className="grid grid-cols-1 gap-8">
            {columnData.map((image, imageIndex) => (
              <ImageItem key={imageIndex} image={image} />
            ))}
          </div>
        ))}
    </div>
  );
}

export default ImageList;
