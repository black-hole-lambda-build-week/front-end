import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch } from './actions';
import './App.scss';
import DumpContainer from './components/DumpContainer';
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Black Hole</h1>
        </header>
        {this.props.loggedIn ?
          this.props.fetched ?
            <DumpContainer /> :
            this.props.fetching ?
              <h2>Please Wait...</h2> :
              <h2><button onClick={() => this.props.fetch()}>Click Here</button> to Enter</h2> :
          <Login />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    fetching: state.fetching,
    fetched: state.fetched
  }
}

export default connect(mapStateToProps, { fetch })(App)
