import React, { Component } from 'react';
import Navbar from './basic/Navbar';
import Header from './basic/Header';
import Footer from './basic/Footer';
import Home from './home/Home';

import About from './component/about/About';
import Posts from './component/post/Posts';
import Post from './component/post/Post';
import Contact from './component/contact/Contact';
import E404 from './E404';

import {Router, Route, BrowserHistory} from 'react-router';

class App extends Component{

  render(){

    return (
      
      <div>

        <Navbar />
        <Header />

        <Router history={BrowserHistory}>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/about" component={About} exact={true}></Route>
          <Route path="/contact" component={Contact} exact={true}></Route>
          <Route path="/posts" component={Posts} exact={true}></Route>
          <Route path="/post/:id" component={Post} exact={true}></Route>

          <Route path="*" component={E404}></Route>
        </Router>

        <Footer />
        
      </div>

    );
  }
}

export default App;
