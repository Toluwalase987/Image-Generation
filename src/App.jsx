import React from "react";
import SearchBar from "./components/Searchbar";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

export default function App(){
  const [images, setImages] = useState([])

  const handleSubmit = async (term)=>{
    const results = await searchImages(term)
    setImages(results)
  }

  return(
    <>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </>
  )
}