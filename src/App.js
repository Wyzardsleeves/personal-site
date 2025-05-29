import './App.css';

//included Components
import Youtube from './Components/Youtube';
import Subhead from './Components/Subhead';
import About from './Components/About';
import HireMe from './Components/HireMe';

function App() {
  return (
    <div className="App">
      <div className="subhead grey lighten-2">
        <Subhead />
      </div>
      <div className="about grey lighten-3">
        <About />
      </div>
      <div className="youtube grey darken-3">
        <Youtube />
      </div>
      <div className="hireme grey lighten-3">
        <HireMe />
      </div>
    </div>
  );
}

export default App;
