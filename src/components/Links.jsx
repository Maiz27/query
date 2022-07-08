import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FcSearch, FcNews, FcImageFile, FcVideoFile } from "react-icons/fc";

const links = [
  {
    url: "/search",
    text: "All",
    icon: <FcSearch />,
  },
  {
    url: "/news",
    text: "News",
    icon: <FcNews />,
  },
  {
    url: "/image",
    text: "Images",
    icon: <FcImageFile />,
  },
  {
    url: "/video",
    text: "Videos",
    icon: <FcVideoFile />,
  },
];

export const Links = () => {
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/search":
        setActive("/search");
        break;
      case "/news":
        setActive("/news");
        break;
      case "/image":
        setActive("/image");
        break;
      case "/video":
        setActive("/video");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <div className="flex  items-center mt-4">
      {links.map(({ url, text, icon }) => (
        <NavLink
          to={url}
          key={text}
          className={
            active === url
              ? "text-blue-700  border-b-2 dark:text-blue-300 border-blue-700 pb-1 m-2"
              : " border-blue-700 pb-1 m-2 mb-0"
          }
        >
          <div className="flex flex-row space-x-2">
            <div className="pt-1">{icon}</div>
            <div>{text}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
