import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import ContactMe from './components/pages/ContactMe'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact-me' component={ContactMe}/>
      </Switch>
    </Router>
  );
}

export default App;
