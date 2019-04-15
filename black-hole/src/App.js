import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch, toLogin } from './actions';
import './App.scss';
import DumpContainer from './components/DumpContainer';
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className='logo' />
          <div className='user'>
            {this.props.loggedIn ?
              <><span className='log'>{this.props.user.username}</span> | <span className='log'>Log Out</span></> :
              <span
                className='log'
                onClick={() => this.props.toLogin()}
              >Log In</span>
            }
          </div>
        </header>
        <section>
          {this.props.loggedIn ?
            this.props.fetched ?
              <DumpContainer /> :
              this.props.fetching ?
                <h2>Please Wait...</h2> :
                <h2><button onClick={() => this.props.fetch()}>Click Here</button> to Enter</h2> :
            <Login />
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    fetching: state.fetching,
    fetched: state.fetched,
    user: state.user
  }
}

export default connect(mapStateToProps, { fetch, toLogin })(App)
