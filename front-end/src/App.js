import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "./Components/Auth/Auth";
import Form from "./Components/Form/Form";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Container maxWidth={"xl"}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/addPost" component={Form} />
          </Switch>
        </Container>
      </Router>
    </>
  );
};

export default App;
