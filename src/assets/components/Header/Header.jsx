import React, { Component } from "react";
import './Header.css';

/**Components */
import Mainmenu from "../Menumain/Mainmenu";
import Selectidioma from "../Selectidioma/Selectidioma";
class Header extends Component {
  render() {
    return (
     <div className="header">
        <div className="container content-header">
            <div className="logo">U</div>
            <Mainmenu />
            <Selectidioma />
        </div>
     </div>
    );
  }
}

export default Header;