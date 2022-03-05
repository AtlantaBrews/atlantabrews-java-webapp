import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const [mainPage, setMainPage] = useState('Home');
  return (
    <div className="App">
      <TopNav mainPage={mainPage} setMainPage={setMainPage} />
      <Main mainPage={mainPage} setMainPage={setMainPage} />
      <Footer mainPage={mainPage} setMainPage={setMainPage} />
    </div>
  );
}

export default App;
