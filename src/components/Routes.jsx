import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { Results } from "./Results";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" element={<Results />} />
        <Route exact path="/search" element={<Results />} />
        <Route exact path="/image" element={<Results />} />
        <Route exact path="/news" element={<Results />} />
        <Route exact path="/video" element={<Results />} />
      </Switch>
    </div>
  );
};
