//import logo from './logo.svg';
import './App.css';
import background from './Images/code-background-light.PNG';
import Projects from './Components/Projects/projects';
//import Amplify, { Auth } from 'aws-amplify';
//import awsconfig from './aws-exports';
import React from 'react';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import Contact from './Components/Contact/contact';
//import Signup from './Components/Signup/Signup'
// import Experience from './Components/Experience/experience';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

// //------------------------------------------------



class App extends React.Component{

  render(){
  return (
    <div className="featured-container">
      <img src={background} className="background-photo"/>
      <div className="triangle-right"></div>
      <div className="nav">
      <Navbar />
      </div>      
      <div className="intro-container">
      <h1 className="words">Full</h1>
      <h4 className="definitions">/ful/ : Complete; Entire; Whole</h4>
      <h1 className="words">Stack</h1>
      <h4 className="definitions">/stak/ : An arrangement; Services that build and run a single application</h4>
      <h1 className="words">Engineer</h1>
      <h4 className="definitions">/en-juh-neer/ : A person trained in a branch of engineering; A creator; A genie of sorts</h4>
      </div>    
      <Projects />
      <Experience />
      <Contact />
      </div>
  );
}
}

export default App;
