import React from 'react';
import '../assets/styles/hireme.css';
import resumePdf from '../assets/files/Resume.pdf';

const HireMe = () => {
    return(
      <div className="hireme-stuff">
        <h4>Hire Me</h4>
        <div className="resume">
          <a href={resumePdf} rel="noopener noreferrer" target="_blank" download><h5><i className="fas fa-file-pdf"></i> Download Resume</h5></a>
          <p>I work primarily with React.js on the front-end and Rails on the back-end but picking up new languages or frameworks isn't a problem. I'm available for hire on a freelance or contract basis. Why not send me an email to jlattimoreweb@gmail.com to discuss it further?</p>
          <iframe title="hireme" src={resumePdf} width="854" height="1135" ></iframe>
        </div>
      </div>
    )
}

export default HireMe;
