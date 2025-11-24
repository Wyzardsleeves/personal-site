import './App.css';

//included Components
import Head from './Components/Head';
import Youtube from './Components/Youtube';
import HireMe from './Components/HireMe';

function App() {
  return (
    <div className="App">
      <div>
        <Head />
      </div>
      <div>
        <Youtube />
      </div>
      <div>
        <HireMe />
      </div>
    </div>
  );
}

export default App;
