import React, { Component } from 'react';
import Navbar from './basic/Navbar';
import Header from './basic/Header';
import Footer from './basic/Footer';
import Home from './home/Home';

class App extends Component{

  render(){

    return (
      
      <div>

        <Navbar />

        <Header />

        <Home />

        <Footer />
        
      </div>

    );
  }
}

export default App;
