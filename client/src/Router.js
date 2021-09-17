import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// home page
import Home from "./sections/Home";
// portfolio sections
import About from "./sections/About.js";
import Profile from "./sections/Profile.js";
import Login from "./sections/LoginForm.js";
import Signup from "./sections/SignupForm.js";
import Contact from "./sections/Contact.js";
//pages
import NoMatch from "./sections/Error404";

const AppRouter = () => {

    return (
<Router>
<>
        <Switch>
        <Route exact path="/" component={Home} /> 
        <Route  path="/about" component={About} /> 
        <Route  path="/profile" component={Profile} /> 
        <Route  path="/login"component={Login} /> 
        <Route  path="/signup" component={Signup} /> 
        <Route  path="/contact" component={Contact} /> 
        <Route component={NoMatch} />

        </Switch>
        </>
</Router>
    )

}
export default AppRouter;