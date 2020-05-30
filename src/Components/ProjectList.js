import email_decal from '../assets/images/email_decal.png';
import email_icon_symbol_vector from '../assets/images/email-icon-symbol-vector.png';
import cryptoCentral from '../assets/images/cc-home-logo.png';
import fortressDefenders from '../assets/images/fortress_defenders.png';
import mockPong from '../assets/images/mockPong.png';
import mockipedia from '../assets/images/mockipedia.png';
import psd1logo from '../assets/images/psd-1-logo.png';
import wheel from '../assets/images/wheel.png';

const projectList = [
  {
    title: 'Fortress Defenders',
    description: 'Game Development CMS for non-coders. (Loads slowly because of mLab)',
    imgURL: fortressDefenders,
    projectURL: 'https://fortress-defenders.herokuapp.com/'
  },
  {
    title: 'Crypto Central',
    description: 'React.js project using AJAX. Incorporated Firebase for a dynamic chat panel.',
    imgURL: cryptoCentral,
    projectURL: 'https://crypto-central-co.herokuapp.com/'
  },
  {
    title: 'BarnesKing Tire Site',
    description: 'Contract work done for local tireshop. Fully responsive and included google map.',
    imgURL: wheel,
    projectURL: 'https://barneskingtire.github.io/spindale/'
  },
  {
    title: 'Email Exercise 1',
    description: 'Email Exercise for email-html practice using mailchimp',
    imgURL: email_decal,
    projectURL: 'https://wyzardsleeves.github.io/youbook-email/'
  },
  {
    title: 'Email Exercise 2',
    description: 'Email Exercise for email-html practice using tables',
    imgURL: email_icon_symbol_vector,
    projectURL: 'https://wyzardsleeves.github.io/email-exercise-2/'
  },
  {
    title: 'PSD Exercise',
    description: 'PSD Exercise with HTML5 and dropdown menus.',
    imgURL: psd1logo,
    projectURL: 'https://wyzardsleeves.github.io/psd-exercise-1/'
  },
  {
    title: 'Bloc Pong',
    description: 'A pong game built with the HTML5 Canvas',
    imgURL: mockPong,
    projectURL: 'https://wyzardsleeves.github.io/bloc-pong/'
  },
  {
    title: 'Mockipedia',
    description: 'A Wikipedia ripoff that was just CRUD practice for Rails',
    imgURL: mockipedia,
    projectURL: 'https://blocipedia-wyzard.herokuapp.com/'
  }
]

export default projectList;
