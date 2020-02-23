import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';

import { Provider } from './context'; //need to be in {} it not default export

import './App.css';
 
function App() {
  return (
    <Provider>
    <Router>
    <React.Fragment>
      <Navbar />
        <div className="container">
          <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
