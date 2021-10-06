import React from "react";
import {Header} from './components/Header'
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";



import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'



function App() {
  return (
    
    <Router>
      <div className="bg">
       
        < Header />
        < Home />
        < Footer />

          {/* <exact path="/" component={PageBodyTemplate} /> */}
          {/* <exact path="/tetris" component={Music} />
          <exact path="/forum/add" component={Videos} />
          <exact path="/forum/:id/edit" component={About} />
          <exact path="/forum" component={Book} /> */}
      
      </div>
    </Router>
    
  );
}

export default App;
