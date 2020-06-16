import React, { Component } from 'react';
import PostPreview from './post/PostPreview';

class Home extends Component{
    render(){
     
        return (
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">

                    <PostPreview />
                    <PostPreview />
                    <PostPreview />
                    <PostPreview />
                    
                    <div className="clearfix">
                        <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                    </div>

                </div>
            </div>
            </div>
        );
    }
}

export default Home;