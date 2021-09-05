 import './App.css';
import Header from './Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Home';
import { Messages } from './Messages';
import { Users } from './Users';
import NotFound from './NotFound';

function App() {
  return (
    <Router basename="/Pages" >
    <div className="App">
      <Header/>
    </div>
      <Switch>
        <Route path = "/Home" component={Home} exact/>
        <Route path = "/Messages" component={Messages} />
        <Route path = "/Users" component={Users} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
