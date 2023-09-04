import React from "react";

interface Image {
  urls: {
    small: string;
  };
  alt_description: string;
  // Add other properties here
}

interface ImageShowProps {
  image: Image;
}

const ImageShow: React.FC<ImageShowProps> = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageShow;
