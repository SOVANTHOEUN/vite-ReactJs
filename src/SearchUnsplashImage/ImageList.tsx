import React from "react";
import "./ImageList.css";
import ImageShow from "./ImageShow";

interface ImageListProps {
  images: Array<{
    id: string;
    urls: {
      small: string;
    };
    alt_description: string;
  }>;
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
