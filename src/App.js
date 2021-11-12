import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Do not forget to push to GitHub
        </p>
        <h1>Hello from V2</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Update changes on AWS
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/yiyang-annie-li/"
          rel="noopener noreferrer"
        >
          My LinkedIn profile
        </a>
      </header>
    </div>
  );
}

export default App;
