import React from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import {Header} from './components/Header'
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Upcoming2 } from "./components/UpcomingEvents2";
import {Events} from "./components/Events";
import { About } from "./components/About";
import { Videos } from "./components/Videos";



function App() {
  return (
    
    <Router>
      <div className="bg">
       
        < Header />
      
        <Route exact path="/" component={Home} />
        <Route exact path="/Events" component={Events} />
        <Route exact path="/About" component={About} />
        {/* <Route exact path="/Music" component={Music} /> */}
        <Route exact path="/Videos" component={Videos} />
        {/* <Route exact path="/Book" component={Book} /> */}

        < Footer />
      
      </div>
    </Router>
    
  );
}

export default App;
