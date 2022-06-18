import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NotFound } from "./pages/NotFound.js";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
