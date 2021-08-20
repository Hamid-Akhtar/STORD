import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ShortUrl from "./@modules/shortUrl/ShortUrl";
import ShortUrlRender from "./@modules/shortUrlRender/ShortUrlRender";
function App() {
  return (
    <div className="App">
      <div className="background"></div>{" "}
        <Router>
          <Switch>
            <Route exact path="/" component={ShortUrl} />
            <Route exact path="/:name" component={ShortUrlRender} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;