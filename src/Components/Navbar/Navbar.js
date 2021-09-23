import React from 'react';
import { Link, BrowserRouter, Switch} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
 
    const navStyle = {
        color:'#d61e1ee8'
    }
    return (

        <nav>
            <BrowserRouter>
            <Switch>
            {/* <h3>Jessica's Portfolio</h3> */}
        <ul className='nav-links'>
            {/* <Link style={navStyle} to="/">
                <li><button className="gradient-buttons">Home</button></li>
            </Link> */}
            <Link style={navStyle} to="/Projects">
                <li>Projects</li>
            </Link>
            <Link style={navStyle} to="/Experience">
                <li>Experience</li>
            </Link>
            <Link style={navStyle} to="/Resume">
                <li>Resume</li>
            </Link>
            <Link style={navStyle} to="/Contact">
                <li>Contact</li>
            </Link>
            <Link style={navStyle} to="/Report">
                <li>Report Bugs</li>
            </Link>

        {/* <li><button className="gradient-buttons">Home</button></li>
        <li><button className="gradient-buttons">Projects</button></li>
        <li><button className="gradient-buttons">Experience</button></li>
        <li><button className="gradient-buttons">Resume</button></li>
        <li><button className="gradient-buttons">Report Bugs</button></li> */}
        {/* <li><button className="gradient-buttons">Sign Up</button></li> */}
        </ul>
        </Switch>
        </BrowserRouter>
        </nav>

    )}

export default Navbar;