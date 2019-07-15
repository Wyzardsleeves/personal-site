import React, {Component} from 'react';
import '../assets/styles/hireme.css';
import resumePdf from '../assets/files/jl_resume.pdf';

class HireMe extends Component{
  constructor(props){
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render(){
    const { pageNumber, numPages } = this.state;
    return(
      <div className="hireme-stuff">
        <h4>Hire Me</h4>
        <div className="resume">
          <a href={resumePdf} target="_blank" download><h5><i className="fas fa-file-pdf"></i> Download Resume</h5></a>
          <p>I work primarily with React.js on the front-end and Rails on the back-end but picking up new languages or frameworks isn't a problem. I'm available for hire on a freelance or contract basis. Why not send me an email to jlattimoreweb@gmail.com to discuss it further?</p>
          <iframe src="https://resume.creddle.io/embed/a1lidyjttgc"  width="854" height="1104" ></iframe>
        </div>
      </div>
    )
  }
}

export default HireMe;
