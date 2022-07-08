import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { MdDarkMode } from "react-icons/md";
import { BsLightbulbFill } from "react-icons/bs";
import logo from "../logo.png";

export const NavBar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen z-10">
        <Link to="/">
          <div className="flex flex-column text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            <img src={logo} alt="logo" className="w-5 h-5 mt-1.5 mr-1" />
            <p>Query</p>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? (
            <div className="flex space-x-2">
              <p>Light</p>
              <BsLightbulbFill className="mt-1 text-yellow-300" />
            </div>
          ) : (
            <div className="flex space-x-2">
              <p>Dark</p>
              <MdDarkMode className="mt-1 text-blue-900" />
            </div>
          )}
        </button>
      </div>
      <Search />
    </div>
  );
};
