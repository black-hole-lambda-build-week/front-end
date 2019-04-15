import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toLogin, logout, toHome } from './actions';
import './App.scss';
import DumpContainer from './components/DumpContainer';
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header>
          <div className='logo'
            onClick={() => this.props.toHome()}
          />
          <div className='user'>
            {
              this.props.loggedIn &&
              <><span className='log'>{this.props.user.username}</span> | <span className='log' onClick={() => this.props.logout()}>Log Out</span></>
            }
          </div>
        </header>
        <section>
          {this.props.loggingIn ?
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
    user: state.login.user
  }
}

export default connect(mapStateToProps, { toLogin, logout, toHome })(App)
