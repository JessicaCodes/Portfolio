import { Router } from 'react-router';
import './contact.css';
import React from 'react';
import LinkedIn from '../LinkedIn/LinkedIn.js';

class Contact extends React.Component {
    render() {
        return (
            <div className='contact-container component'>
                <h1>

                    How to Reach Me

                </h1>
                <p>Phone: 516-522-4234</p>
                <p>Email: thejnetwork.11@gmail.com</p>
                <LinkedIn />
                </div>
                )
    }
}
export default Contact;