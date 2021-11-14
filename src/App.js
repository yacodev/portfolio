import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage3 from "./pages/Homepage3";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import WordDetails from "./pages/WordDetails";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage3 />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="/works/work-details/:id/:title" component={WordDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
