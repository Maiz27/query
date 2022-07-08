import React, { useState, useEffect } from "react";

export const Footer = () => {
  const [year, setYear] = useState(null);
  const date = new Date();
  const currentYear = date.getFullYear();

  useEffect(() => {
    setYear(currentYear);
  }, [currentYear]);

  return (
    <div className=" text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
      <h1>&copy; {year} Query</h1>
    </div>
  );
};
