import React, { Component } from 'react';
import Navbar from './basic/Navbar';
import Footer from './basic/Footer';
import Home from './home/Home';

import About from './about/About';
import Posts from './post/Posts';
import Post from './post/Post';
import Contact from './contact/Contact';
import E404 from './E404';

import {BrowserRouter as Router, Route, useLocation} from 'react-router-dom';
import { Switch } from 'react-router-dom';

class App extends Component{
  
   render(){
     return (
      
      <div>
        <Router>

          <Navbar />

          <Switch>

            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/about" component={About} exact={true}></Route>
            <Route path="/contact" component={Contact} exact={true}></Route>
            <Route path="/posts" component={Posts} exact={true}></Route>
            <Route path="/post/:id" component={Post} exact={true}></Route>

            <Route path="*" component={E404}></Route>
          
          </Switch>        

          <Footer />
        
        </Router>
      </div>

    );

   }
    
    
}

export default App;
