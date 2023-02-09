import React, { Component } from "react";
import './Mainmenu.css';

class Mainmenu extends Component {
  render(){
    return(
        <div className="containt-main-menu">
            <ul className="main-menu">
                <li>DEFI</li>
                <li>HIPERFUND</li>
                <li>HDAO</li>
                <li>META ECOSYSTEM</li>
                <li>STRATEGIC ROADMAP</li>
                <li>TEAM</li>
            </ul>
        </div>
    );
  }
}

export default Mainmenu;