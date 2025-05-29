import React from 'react';
import '../assets/styles/about.css';
import me from '../assets/images/me.jpg';

const About = () => {
  return(
    <div className="about-stuff">
      <div className="container">
        <div className="text-background">
          <h4>About Me</h4>
          <div className="about-image">
            <img src={me} alt="about" />
          </div>
          <div className="about-body">
            <h5>Justin Lattimore</h5>
            <p>
              <strong>
                Hi, I'm a Web Developer with a 3D and Graphic Design background. I'm well versed in HTML, CSS, ReactJS, Rails and Node. As a product-oriented individual, I focus on getting results first. I have an unconventional entry into this industry because I knew that developing applications for the web is what I wanted to do after meeting some engineers at a Unity Meetup.
              </strong>
            </p>
            <br/>
            <p>
              <strong>I bring a youthful growth mindset and eagerness to use new skills and technologies. Feel free to check out my projects on my site or GitHub.</strong>
            </p>
          </div>
          <div className="about-links">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCLn0jCRt_zJfsMhR1WFswzw"><i className="fab fa-youtube"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wyzardsleeves"><i className="fab fa-github"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/justin-lattimore"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
