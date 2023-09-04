import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import searchImages from "./ConnectApi";

function UnsplashApi() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term: string) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default UnsplashApi;
