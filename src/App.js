import logo from './logo.svg';
import './App.css';

const data = {
  jobs: [
    {
      name: "Google",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1671667200&v=beta&t=DbbOvW-gTD68zgGNE4put9sjoR8bBBKK0qfc0rE-UhcΩ"

    },
    {},
    {}
  ]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
