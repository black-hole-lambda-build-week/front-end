import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toLogin, logout, toHome, login } from './actions';
import './App.scss';
import DumpContainer from './components/DumpContainer';
import Login from './components/Login';
import Home from './components/Home';

import logo from './images/logo_uncolored.png';

class App extends Component {
  componentDidMount() {
    localStorage.removeItem('token')
    localStorage.getItem('user') &&
      this.props.login(JSON.parse(localStorage.getItem('user')));
  }

  render() {
    return (
      <div className='App'>
        <nav>
          <img
            className='logo'
            src={logo}
            onClick={() => this.props.toHome()}
            alt='Logo'
          />
          <div className='user'>
            {this.props.loggedIn && (
              <>
                <div className='nav-user'>
                  <p className='log-username'>{this.props.user.username}</p>
                  <p>|</p>
                  <span className='log' onClick={() => this.props.logout()}>
                    Log Out
                  </span>
                </div>
              </>
            )}
          </div>
        </nav>
        <section>
          {this.props.loggingIn || this.props.loggedIn ?
            this.props.loggedIn ?
              <DumpContainer /> :
              <Login /> :
            <Home />
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.login.loggingIn,
    loggedIn: state.login.loggedIn,
    fetching: state.login.fetching,
    fetched: state.login.fetched,
    user: state.login.user,
    route: state.login.route
  };
};

export default connect(
  mapStateToProps,
  { toLogin, logout, toHome, login }
)(App);
