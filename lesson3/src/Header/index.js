import React, { Component } from 'react';
import './Header.css';

import {Link} from 'react-router-dom';



class Header extends Component {
    
      render() {
        return (
            <div className="navigation">
              <h1 className="navigation-title">
                <Link to="/">To-Do List</Link>
              </h1>
            </div>
        );
      }
    }
    
export default Header;