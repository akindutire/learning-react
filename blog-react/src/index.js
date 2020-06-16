import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './component/App.js';
import About from './component/about/About.js';
import Post from './component/post/Post.js';
import Contact from './component/contact/Contact.js';

import * as serviceWorker from './serviceWorker';
import {Router, Route, BrowserHistory} from 'react-router';

ReactDOM.render(
  <React.StrictMode>
    <Router history={BrowserHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/post" component={Post}></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
