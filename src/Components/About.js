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
                Hi, I'm a full-stack Web Developer with a strong command of modern web technologies, including React.js, Redux, Ruby on Rails, JavaScript (ES6), and HTML/CSS. I’ve contributed to projects across government, real estate, and cybersecurity sectors, delivering scalable, accessible, and user-focused solutions. From building secure API integrations and automating internal workflows to architecting full-stack applications and developing custom UI components, I bring a results-driven approach to every project I take on.
              </strong>
            </p>
            <br/>
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
