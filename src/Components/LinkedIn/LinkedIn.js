import React from 'react';
import linkedin from '../../Images/LinkedIn-Photo.png'; // Tell webpack this JS file uses this image


function LinkedIn() {
  // Import result is the URL of your image
  return <a href="https://www.linkedin.com/in/jessica-salazar-31366137/"><img src={linkedin} alt="LinkedIn" /></a>;
}

export default LinkedIn;