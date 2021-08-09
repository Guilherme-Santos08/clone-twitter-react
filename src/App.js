import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import "./App.css";
import TweetMobile from "./pages/Tweet/Tweet";

function App() {
   return (
      <Router>
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/compose/tweet" component={TweetMobile}/>
         </Switch>
      </Router>
   );
}

export default App;
