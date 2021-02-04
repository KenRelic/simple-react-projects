import React from "react";
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";

import LandingPage from "./containers/landing-page/LandingPage";
import RandomQuoute from "./containers/random-quote/RandomQuote";
import Calculator from "./containers/calculator/Calculator";
import DrumMachine from "./containers/drum-machine/DrumMachine";
import Markdown from "./containers/markdown/Markdown";
import Pomdoro from "./containers/pomdoro/Pomdoro";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/random-quote" component={RandomQuoute} />
        <Route exact path="/pomdoro-clock" component={Pomdoro} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/drum-machine" component={DrumMachine} />
        <Route exact path="/markdown-previewer" component={Markdown} />
      </Switch>
    </BrowserRouter>
  );
}
