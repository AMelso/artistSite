import React from "react";


import {Navbar} from './components/Navbar'
import {Socials} from './components/Socials'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


function App() {
  return (
    
    <Router>
      <div className="bg">
        <Navbar />
        <Socials />
          {/* <exact path="/" component={Home} />
          <exact path="/tetris" component={Music} />
          <exact path="/forum/add" component={Videos} />
          <exact path="/forum/:id/edit" component={About} />
          <exact path="/forum" component={Book} /> */}
      </div>
    </Router>
    
  );
}

export default App;
