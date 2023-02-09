import React, { Component } from "react";
import './Selectidioma.css';

class Selectidioma extends Component {
    render(){
      return (
        <div className="contain-idioma">
            <ul className="menu-idioma">
                <li>EN
                    <ul>
                        <li>ES</li>
                        <li>FR</li>
                    </ul>
                </li>

            </ul>
        </div>
      );
    }
}

export default Selectidioma;