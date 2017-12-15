import React,{Component} from 'react';
class NavBar extends Component {
    state = {}
    render() { 
        return <nav className="navbar">
            <div className="container">
              <div className="navbar-brand is-large">
              <a className="navbar-item">
              NBA STATS 
              </a>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                  <span className="navbar-item">
                    <a className="button is-info is-inverted" href="//github.com/LAlvarez11" target="_blank">
                      <span className="icon">
                        <i className="fa fa-lg fa-github" />
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>;
    }
}
 
export default NavBar ;