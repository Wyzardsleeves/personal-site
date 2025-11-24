import React from 'react';
import banner from '../assets/images/new_banner.png';

const About = () => {
  return(
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center" style={{backgroundImage: `url(${banner})`}}>
      {/* <div className="nav-bar absolute top-0 left-0 right-0 z-10 p-6">Stuff will go here</div> */}
      <div className="max-w-5xl mr-auto px-6 py-20">
        <div className="title-content backdrop-blur-2xl bg-white/10 dark:bg-black/20 rounded-3xl shadow-2xl border border-white/20 p-12 md:p-16 transition-all duration-500 hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
          <div className="about-body space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight drop-shadow-lg text-left">
              Hi, I'm Justin!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-4xl text-left">
              I'm a full-stack Web Developer with a strong command of modern web technologies, including React.js, Redux, Ruby on Rails, JavaScript (ES6), and HTML/CSS. I've contributed to projects across government, real estate, and cybersecurity sectors, delivering scalable, accessible, and user-focused solutions. From building secure API integrations and automating internal workflows to architecting full-stack applications and developing custom UI components, I bring a results-driven approach to every project I take on.
            </p>
          </div>
          <div className="about-links mt-12 flex gap-6 justify-center md:justify-start">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCLn0jCRt_zJfsMhR1WFswzw"
               className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <i className="fab fa-youtube text-white text-2xl"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wyzardsleeves"
               className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <i className="fab fa-github text-white text-2xl"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/justin-lattimore"
               className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <i className="fab fa-linkedin text-white text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
