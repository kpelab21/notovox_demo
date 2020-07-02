import React from 'react';
import logo from './logo.svg';
import './main.css';
import Comment from './components/task/comment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Comment/>
    </div>
  );
}

export default App;
