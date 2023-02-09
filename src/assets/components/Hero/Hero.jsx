import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render(){
    return(
        <div className='hero'>
            <div className='container'>
              <div className="row">
                <div className="col-12 col-md-6">
                  <span>MetaFund</span>
                  <h1>The Strongest Universe in Blockchain Finance</h1>
                  <div className='btn-login-hero'>LOGIN IN</div>
                </div>
              </div>

            </div>
        </div>
    );
  }
}

export default Hero;