import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                   
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="nav navbar-nav">
                            <li className="nav-link" >
                                <Link to="/"  >Home</Link>
                            </li>
                            <li className="nav-link" >
                                <Link to="/About" >About</Link>
                             </li>
                            <li  className="nav-link">
                                <Link to="/ArticlesList" > Articles</Link>
                             </li>
                        </ul>
                     
                    </div>
                </nav>

                
            </div>
        );
    }
}

export default NavBar;