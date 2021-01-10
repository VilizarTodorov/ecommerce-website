import React from 'react';
import './App.css';
import Header from './components/Header';
import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className='main'>
        <Routes></Routes>
      </main>
    </div>
  );
}

export default App;
