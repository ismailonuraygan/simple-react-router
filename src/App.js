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

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
    </div>
      <Switch>
        <Route path = "/" component={Home} exact/>
        <Route path = "/Messages" component={Messages} />
        <Route path = "/Users" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
