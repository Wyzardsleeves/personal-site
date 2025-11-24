import { useState, useEffect } from 'react';
import axios from 'axios';

//const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_KEY;

const Youtube = () => {

  const [data, setData] = useState([]);
  const [vidIndex, setVidIndex] = useState(0);
  const [selectedURL, setSelectedURL] = useState('_b7sMyXkrNI');

  const playListId = 'PL2QHmzDw4DXzDXdYQkm8qS8EZ39thBElN';
  const maxResults = 20;

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playListId}&key=${'AIzaSyCKtZ3QLnakjbuDpfAl-i3vL_zQ_AehjX0'}`)
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
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">

        {/* Main Video Player */}
        <div className="youtube-frame mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/5 border border-gray-200/20 dark:border-white/10 transition-all duration-500 hover:shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
            <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
              <iframe
                title="videoWindow"
                src={`https://www.youtube.com/embed/${selectedURL}`}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Video Thumbnails Gallery */}
        <div className="youtube-thumbs-main relative">

          {/* Top Navigation Button */}
          <div className="flex justify-center mb-6 md:hidden">
            <button
              onClick={decreaseIndex}
              disabled={vidIndex === 0}
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <i className="fas fa-chevron-up text-gray-700 dark:text-gray-200"></i>
            </button>
          </div>

          <div className="flex items-center gap-4">

            {/* Left Navigation Button */}
            <button
              onClick={decreaseIndex}
              disabled={vidIndex === 0}
              className="hidden md:flex w-14 h-14 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex-shrink-0"
            >
              <i className="fas fa-chevron-left text-gray-700 dark:text-gray-200"></i>
            </button>

            {/* Thumbnails Grid */}
            <div className="flex-1 overflow-hidden">
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {data.slice(vidIndex, vidIndex + 4).map((item, index) =>
                  <li
                    key={index}
                    onClick={(e) => changeVid(e, item.snippet.resourceId.videoId)}
                    title={`${item.snippet.title}: ${item.snippet.description}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-lg backdrop-blur-xl bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          alt={item.snippet.title}
                          src={item.snippet.thumbnails.medium.url}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                            <i className="fas fa-play text-gray-900 ml-1"></i>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 line-clamp-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                          {item.snippet.title}
                        </h5>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={increaseIndex}
              disabled={vidIndex >= data.length - 4}
              className="hidden md:flex w-14 h-14 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex-shrink-0"
            >
              <i className="fas fa-chevron-right text-gray-700 dark:text-gray-200"></i>
            </button>

          </div>

          {/* Bottom Navigation Button */}
          <div className="flex justify-center mt-6 md:hidden">
            <button
              onClick={increaseIndex}
              disabled={vidIndex >= data.length - 4}
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <i className="fas fa-chevron-down text-gray-700 dark:text-gray-200"></i>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Youtube;
