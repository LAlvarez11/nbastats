import React,{Component} from 'react';
class NavBar extends Component {
    state = {}
    render() { 
        return <nav className="navbar">
            <div className="container">
              <div className="navbar-brand is-large">
                <a className="navbar-item">
                  <h1 className="title">NBA STATS</h1>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                  <span className="navbar-item">
                    <a className="button is-info" href="//github.com/LAlvarez11" rel="noopener noreferrer" target="_blank">
                      <span className="icon">
                        <i className="fa fa-3x fa-github" />
                      </span>
                    </a>
                  </span>
                  <span className="navbar-item">
                    <a className="button is-info" href="https://www.linkedin.com/in/luis-alvarezonline/" rel="noopener noreferrer" target="_blank" >
                      <span className="icon">
                        <i className="fa fa-3x fa-linkedin-square" />
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