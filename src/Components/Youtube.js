import React, {Component} from 'react';
import '../assets/styles/youtube.css'

import axios from 'axios';

class Youtube extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      vidIndex: 0,
      selectedURL: 'b8LAYwuuQj8'
    }
  }

  componentWillMount(){
    this.getData()
  }

  getData = () => {
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PL2QHmzDw4DXzDXdYQkm8qS8EZ39thBElN&key=AIzaSyCKtZ3QLnakjbuDpfAl-i3vL_zQ_AehjX0')
    .then((response) => this.setState({data: response.data.items}))
    .catch((response) => console.log(response.message))
  }

  clipText = (num, text) => {
    return text.slice(0, num) + '....';
  }

  changeVid = (e, vidId) => {
    e.preventDefault();
    this.setState({selectedURL: vidId});
    var vidWindow = document.getElementsByClassName("youtube-frame")[0];
    vidWindow.scrollIntoView();
  }

  decreaseIndex = () => {
    if(this.state.vidIndex > 0){
      this.setState({vidIndex: this.state.vidIndex - 1})
    }
  }

  increaseIndex = () => {
    if(this.state.vidIndex <= this.state.data.length - 5){
      this.setState({vidIndex: this.state.vidIndex + 1})
    }
  }

  render(){
    return(
      <section>
        <div className="youtube-stuff">
          <div className="youtube-frame">
            <div className='embed-container'>
              <iframe title="videoWindow" src={`https://www.youtube.com/embed/${this.state.selectedURL}`}></iframe>
            </div>
          </div>
          <div className="youtube-thumbs-main">
            <div className="container">
              <h5 onClick={this.decreaseIndex}><i className="chev-vert fas fa-chevron-up"></i></h5>
            </div>
            <div className="side-piece">
              <h5 className="chev-horz" ><i className="chev-horz fas fa-chevron-left" onClick={this.decreaseIndex}></i></h5>
            </div>
            <ul>
              {this.state.data.slice(this.state.vidIndex, this.state.vidIndex + 4).map((item) =>
                <li onClick={(e) => this.changeVid(e, item.snippet.resourceId.videoId)} title={`${item.snippet.title}: ${item.snippet.description}`}>
                  <img src={item.snippet.thumbnails.medium.url} />
                  <h5 className="grey-text">{this.clipText(17, item.snippet.title)}</h5>
                </li>
              )}
            </ul>
            <div className="side-piece">
              <h5 className="chev-horz" onClick={this.increaseIndex}><i className="chev-horz fas fa-chevron-right"></i></h5>
            </div>
            <div className="container">
              <h5 onClick={this.increaseIndex}><i className="chev-vert fas fa-chevron-down"></i></h5>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Youtube;
