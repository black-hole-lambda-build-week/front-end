import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../../../actions';
import { NavLink } from 'react-router-dom';

class Dump extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      updateNote: {
        message: ''
      }
    };
  }

  handleInput = e => {
    this.setState({
      ...this.state,
      updateNote: {
        ...this.state.updateNote,
        [e.target.name]: e.target.value
      }
    });
  };

  deleteNote = e => {
    e.preventDefault();
    this.props.deleteNote(this.props.dump.id);
  };

  handleUpdate = e => {
    e.preventDefault();
    this.props.updateNote(this.props.dump.id, this.state.updateNote);
    this.setState({
      ...this.state,
      editing: false,
      updateNote: {
        ...this.state.updateNote,
        message: ''
      }
    });
  };

  render() {
    return (
      <NavLink to={`/${this.props.dump.id}`}>
        <div className='note'>
          <button
            onClick={() =>
              this.setState({
                ...this.state,
                editing: true
              })
            }
            style={{
              display: !this.state.editing ? 'block' : 'none'
            }}
          >
            Edit Entry
          </button>

          <form onSubmit={this.handleUpdate}>
            <p className='message'>
              {this.state.editing ? (
                <input
                  type='text'
                  name='message'
                  value={this.state.updateNote.message}
                  onChange={this.handleInput}
                />
              ) : (
                this.props.dump.message
              )}
            </p>
            <p className='time-left'>
              Time left in orbit:{' '}
              {this.state.editing ? (
                <input
                  type='date'
                  name='experationDate'
                  value={this.state.updateNote.experationDate}
                  onChange={this.handleInput}
                />
              ) : (
                'DISPLAY EXPERATION DATE HERE'
              )}
            </p>
            <button>Enter</button>
            <button onClick={this.deleteNote}>Delete</button>
          </form>
        </div>
      </NavLink>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { updateNote, deleteNote }
)(Dump);
=======
import moment from 'moment';

export default props => {
    console.log(props)
    let filter = props.dump.message.replace(/([fsc][uh][cni][kt])/ig, '****').replace(/([b][i][t][c][h])/ig, '*****'),
        timeLeft = (originalTime, timeInOrbit) => {
            return moment(originalTime).add(timeInOrbit, 'days').fromNow(true)
        }

    return (

        <div className='note' onClick={() => props.toMessage(props.dump.id)}>
            <p className='message'>{filter}
            </p>
            <p className='time-left'>
                Time left in orbit: {timeLeft(props.dump.expirationDate, props.dump.numberOfDays)}
            </p>
        </div>
    );
}
>>>>>>> c9ec448f26d8bc2709f2228b2bdb8455be4b2c68
