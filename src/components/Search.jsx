import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResultContext } from "../Context/ResultContextProvider";
import { Links } from "./Links";
import { FcSearch } from "react-icons/fc";

export const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, searchTerm, getResults } = useResultContext();
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(text);
    getResults(text);

    navigate("/search");
  };

  return (
    <div className="flex flex-col sm:-mt-10  mt-3 items-center justify-center w-screen">
      <div className="flex-row z-10">
        <input
          onChange={handleTextChange}
          value={text || searchTerm}
          type="text"
          className="w-48 md:w-96 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-3/4"
          placeholder="Query Search"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="absolute text-4xl mt-2 ml-2 w-1/6"
        >
          <FcSearch />
        </button>
      </div>
      <Links />
    </div>
  );
};
