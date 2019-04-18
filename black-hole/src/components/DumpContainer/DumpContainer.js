import React from 'react';

import { connect } from 'react-redux';
import Dump from './Dump';
import Add from './Add';
import Message from './Dump/Message/Message';
import './Dumps.scss';
import { fetchingData, addNote } from '../../actions';

import blackhole from '../../images/animator.gif';
import bg from '../../images/animator.gif';
import stars from '../../images/stars1.png';

class DumpContainer extends React.Component {
  state = {
    message: {
      id: '',
      bool: false
    },
    bool: false
  };

  componentDidMount() {
    this.props.fetchingData();
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      message: e.target.value
    });
  };

  toMessage = id => {
    this.setState({
      ...this.state,
      message: {
        id: id,
        bool: true
      }
    });
  };

  unMessage = () => {
    this.setState({
      ...this.state,
      message: {
        id: '',
        bool: false
      }
    });
  };

  unBool = () => {
    this.setState({
      ...this.state,
      bool: false
    });
  };

  render() {
    return (
      <>
        <div className='DumpContainer'>
          <div className='orbit-header'>
            <h1
              className='dump-header'
              style={{
                display: this.state.bool && 'none'
              }}
            >
              In Orbit
            </h1>
            <p
              className='add'
              onClick={() => {
                this.state.message.bool
                  ? this.setState({
                    ...this.state,
                    message: {
                      ...this.state.message,
                      id: '',
                      bool: false
                    }
                  })
                  : this.setState({
                    ...this.state,
                    bool: !this.state.bool
                  });
              }}
            >
              {this.state.bool
                ? '‹ Back'
                : this.state.message.bool
                  ? '‹ Back'
                  : '+ Create a message'}
            </p>
          </div>
          {this.state.bool ? (
            <Add unBool={this.unBool} />
          ) : this.state.message.bool ? (
            <Message
              dump={
                this.props.dumps[
                this.props.dumps.findIndex(
                  dump => dump.id === this.state.message.id
                )
                ]
              }
              unMessage={this.unMessage}
            />
          ) : (
                this.props.dumps.map((dump, id) => (
                  <Dump dump={dump} toMessage={this.toMessage} key={id} />
                ))
              )}
        </div>
        <img src={stars} alt='' className='stars' />
        <img
          src={this.state.bool ? blackhole : bg}
          alt=''
          className={`${this.state.bool ? 'background' : 'background-two'}`}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    dumps: state.note.notes
  };
};

export default connect(
  mapStateToProps,
  { fetchingData, addNote }
)(DumpContainer);
