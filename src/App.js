//import logo from './logo.svg';
import './App.css';
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
import Home from './Components/Home/Home'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'

// //------------------------------------------------



class App extends React.Component{

  render(){
  return (
    <>
    <div className="nav">
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Contact />
      </div> 
      </>

  );
}
}

export default App;
