import React,{ Component } from "react";

import NavBar from './navbar'

class Header extends Component {

    render() { 
        return <section className="hero is-medium is-info is-bold">
            <div className="hero-head">
              <div className="container">
                <NavBar />
              </div>
            </div>
          </section>;
    }
}
 
export default Header;
