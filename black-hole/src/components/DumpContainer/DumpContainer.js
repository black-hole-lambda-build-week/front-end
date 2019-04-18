import React from 'react';

import { connect } from 'react-redux';
import Dump from './Dump';
import Add from './Add'
import Message from './Dump/Message'
import './Dumps.scss';
import { fetchingData, addNote } from '../../actions';

import bg from '../../images/bg2.jpg';
import blackhole from '../../images/animator.gif';

class DumpContainer extends React.Component {
<<<<<<< HEAD
  state = {
    message: ''
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

  add = e => {
    e.preventDefault();
    this.props.addNote(this.state);
  };

  render() {
    return (
      <>
        <div className='DumpContainer'>
          <h1 className='dump-header'>In Orbit</h1>

          {this.props.dumps.map((dump, id) => (
            <Dump dump={dump} key={id} />
          ))}
          <form onSubmit={this.add}>
            <input
              onChange={this.handleChanges}
              name='message'
              value={this.state.message}
              type='text'
            />
          </form>
        </div>

        <img src={bg} alt='' className='background' />
      </>
    );
  }
=======
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
        })
    }

    unMessage = () => {
        this.setState({
            ...this.state,
            message: {
                id: '',
                bool: false
            }
        })
    }

    unBool = () => {
        this.setState({
            ...this.state,
            bool: false
        })
    }

    render() {
        return (
            <>
                <div className='DumpContainer'>
                    <h1
                        className='dump-header'
                        style={{
                            display: this.state.bool && 'none'
                        }}
                    >In Orbit</h1>
                    <p
                        className='add'
                        onClick={() => {
                            this.state.message.bool ?
                                this.setState({
                                    ...this.state,
                                    message: {
                                        ...this.state.message,
                                        id: '',
                                        bool: false
                                    }
                                }) :
                                this.setState({
                                    ...this.state,
                                    bool: !this.state.bool
                                })
                        }}>{this.state.bool ?
                            'Cancel' :
                            this.state.message.bool ?
                                'Cancel' :
                                '+ Create a message'}</p>
                    {this.state.bool ?
                        <Add
                            unBool={this.unBool}
                        /> :
                        this.state.message.bool ?
                            <Message
                                dump={this.props.dumps[this.props.dumps.findIndex(dump => dump.id === this.state.message.id)]}
                                unMessage={this.unMessage}
                            /> :
                            this.props.dumps.map((dump, id) => (
                                <Dump dump={dump} toMessage={this.toMessage} key={id} />
                            ))}
                </div>
                <img src={this.state.bool ? blackhole : bg} alt='' className='background' />
            </>
        );
    }
>>>>>>> c9ec448f26d8bc2709f2228b2bdb8455be4b2c68
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
