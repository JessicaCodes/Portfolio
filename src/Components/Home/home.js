import React, { Component } from 'react';
import './home.css';
import background from '../../Images/code-background-light.PNG';

class Home extends Component{
    render() {
        return(

            <div className="featured-container component">
                <img src={background} className="background-photo"/>
                <div className="triangle-right"></div>
                    
                <div className="intro-container">
                    <h1 className="words">Full</h1>
                    <h4 className="definitions">/ful/ : Complete; Entire; Whole</h4>
                    <h1 className="words">Stack</h1>
                    <h4 className="definitions">/stak/ : An arrangement; Services that build and run a single application</h4>
                    <h1 className="words">Engineer</h1>
                    <h4 className="definitions">/en-juh-neer/ : A person trained in a branch of engineering; A creator; A genie of sorts</h4>
                </div> 
            </div>
        )
    }
}
 
export default Home;