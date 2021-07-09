import './App.css';
import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
// define component using function and then return it.

// we can divide the class into components.

function App(){
  return (
    <div className="App">
      <Header/>
      <p>Hey baby man</p>
      <Footer/>
    </div>
  );
  }





export default App;

