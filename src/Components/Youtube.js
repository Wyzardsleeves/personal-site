import { useState, useEffect } from 'react';
import '../assets/styles/youtube.css';
import axios from 'axios';

const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_KEY;

const Youtube = () => {

  const [data, setData] = useState([]);
  const [vidIndex, setVidIndex] = useState(0);
  const [selectedURL, setSelectedURL] = useState('b8LAYwuuQj8');

  const playListId = 'PL2QHmzDw4DXzDXdYQkm8qS8EZ39thBElN';
  const maxResults = 20;

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playListId}&key=${YOUTUBE_KEY}`)
    .then((response) => setData(response.data.items))
    .catch((response) => console.log(response.message))
  }

  const clipText = (num, text) => {
    return text.slice(0, num) + '....';
  }

  const changeVid = (e, vidId) => {
    e.preventDefault();
    setSelectedURL(vidId);
    var vidWindow = document.getElementsByClassName("youtube-frame")[0];
    vidWindow.scrollIntoView();
  }

  const decreaseIndex = () => {
    if(vidIndex > 0){
      setVidIndex(vidIndex - 1)
    }
  }

  const increaseIndex = () => {
    if(vidIndex <= data.length - 5){
      setVidIndex(vidIndex + 1)
    }
  }

  return(
    <section>

      <div className="youtube-stuff">
        <div className="youtube-frame">
          <div className='embed-container'>
            <iframe title="videoWindow" src={`https://www.youtube.com/embed/${selectedURL}`}></iframe>
          </div>
        </div>
        <div className="youtube-thumbs-main">
          <div className="container">
            <h5 onClick={decreaseIndex}><i className="chev-vert fas fa-chevron-up"></i></h5>
          </div>
          <div className="side-piece">
            <h5 className="chev-horz" ><i className="chev-horz fas fa-chevron-left" onClick={decreaseIndex}></i></h5>
          </div>
          <ul>
            {data.slice(vidIndex, vidIndex + 4).map((item) =>
              <li onClick={(e) => changeVid(e, item.snippet.resourceId.videoId)} title={`${item.snippet.title}: ${item.snippet.description}`}>
                <img alt="youtube" src={item.snippet.thumbnails.medium.url} />
                <h5 className="grey-text">{clipText(17, item.snippet.title)}</h5>
              </li>
            )}
          </ul>
          <div className="side-piece">
            <h5 className="chev-horz" onClick={increaseIndex}><i className="chev-horz fas fa-chevron-right"></i></h5>
          </div>
          <div className="container">
            <h5 onClick={increaseIndex}><i className="chev-vert fas fa-chevron-down"></i></h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Youtube;
