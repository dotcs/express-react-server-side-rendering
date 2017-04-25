import React, { Component } from 'react';
import { Link } from 'react-router';

class AppRoot extends Component {
  render() {
    return (
      <main>
        <div className="navbar navbar-default navbar-static-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/home">React - Server side rendering</Link>
              <ul className="nav navbar-nav">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/list">List</Link></li>
              </ul>
            </div>
          </div>
        </div>
        {this.props.children}
      </main>
    );
  }
}

export default AppRoot;
