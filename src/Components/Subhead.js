import icon from '../assets/images/justin_the_dev_scrap.png';
import '../assets/styles/subhead.css';

const Subhead = () => {
  return(
    <div className="container subhead-stuff">
      <div className="head-half head-half-left">
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCLn0jCRt_zJfsMhR1WFswzw">
          <img src={icon} alt="Justin the Dev Logo" />
        </a>
      </div>
      <div className="head-half head-half-right">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wyzardsleeves"><h5><i class="fab fa-github"></i></h5></a>
      </div>
    </div>
  )
}

export default Subhead;
