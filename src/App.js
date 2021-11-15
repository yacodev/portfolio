import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import WordDetails from "./pages/WordDetails";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/portfolio/" exact>
          <Homepage />
        </Route>
        <Route path="/portfolio/blogs" component={Bloglist} exact />
        <Route path="/portfolio/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="/portfolio/works/work-details/:id/:title" component={WordDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
