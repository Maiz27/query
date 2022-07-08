import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routes";
import { Results } from "./components/Results";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark h-full" : "light h-full"}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen min-w-full">
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Results />
        <Footer />
      </div>
    </div>
  );
};

export default App;
