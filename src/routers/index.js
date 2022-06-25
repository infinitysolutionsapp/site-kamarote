import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// importing all the themes
import Theme from "../themes/theme";
import Download from "../themes/download";
import Review from "../themes/review";
import Faq from "../themes/faq";
import NotFound from "../themes/404";
import ComingSoon from "../themes/comingSoon";
import ThankYou from "../themes/thankyou";
import Team from "../themes/team";
import SingleTeam from "../themes/singleTeam";
import Blog from "../themes/blog";
import BlogLeft from "../themes/blogLeft";
import BlogRight from "../themes/blogRight";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Theme}/>
            <Route exact path="/download" component={Download}/>
            <Route exact path="/review" component={Review}/>
            <Route exact path="/infinitybot" component={Review}/>
            <Route exact path="/faq" component={Faq}/>
            <Route exact path="/404" component={NotFound}/>
            <Route exact path="/comingSoon" component={ComingSoon}/>
            <Route exact path="/thankyou" component={ThankYou}/>
            <Route exact path="/team" component={Team}/>
            <Route exact path="/singleTeam" component={SingleTeam}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/blogLeft" component={BlogLeft}/>
            <Route exact path="/blogRight" component={BlogRight}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

