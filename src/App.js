import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NotFound } from "./pages/NotFound.js";
import { Dashboard } from "./pages/Dashboard";
import Register from "./pages/Register/Register";
import TextPage from "./pages/TextPage/TextPage.js";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/textpage" component={TextPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
