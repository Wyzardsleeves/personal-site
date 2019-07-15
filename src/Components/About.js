import React, {Component} from 'react';
import '../assets/styles/about.css';
import me from '../assets/images/me.jpg';

const About = () => {
  return(
    <div className="about-stuff">
      <div className="container">
        <div className="text-background">
          <h4>About Me</h4>
          <div className="about-image">
            <img src={me} />
          </div>
          <div className="about-body">
            <h5 className="">Justin Lattimore</h5>
            <p className=""><strong>Hi, I'm a Web Developer with a 3D and Graphic Design background. I am willing to relocate anywhere with my own resources. I'm well versed in HTML, CSS, ReactJS, Rails and Node.</strong></p><br/>
            <p><strong>Please feel free to look through my website.</strong></p>
          </div>
          <div className="about-links">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCLn0jCRt_zJfsMhR1WFswzw"><i className="fab fa-youtube"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wyzardsleeves"><i className="fab fa-github"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/justin-lattimore-90387445"><i className="fab fa-linkedin"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/JustintheDev1"><i className="fab fa-twitter"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/justinlattimore/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
