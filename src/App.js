import './App.css';
import Header from './Header';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './Home';
import { Messages } from './Messages';
import { Users } from './Users';
import NotFound from './NotFound';
import { Post } from './Post';

function App() {

  const [login, setlogin] = useState(false)

  return (
    <Router basename="/Pages" >
      <div className="App">
        <Header />

        <button onClick={() => setlogin(!login)} >
          {login ? "log out" : "log in"}
        </button>


        <Switch>
          <Route path="/Home" component={Home} exact />
          <Route path="/Messages">
            {<Messages login={login} />}
          </Route>
          {/*Or you can use useHistory Hook*/}
          <Route path="/Users" component={Users} />
          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
