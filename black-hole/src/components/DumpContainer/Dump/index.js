import React from 'react';
import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../../../actions';

class Dump extends React.Component {
  state = {
    editing: false,
    updateNote: {
      noteInput: '',
      experationDate: ''
    }
  };

  handleInput = e => {
    this.setState({
      ...this.state,
      updateNote: {
        ...this.state.updateNote,
        [e.target.name]: e.target.value
      }
    });
  };

  handeUpdate = e => {
    e.preventDefault();
    this.props.note.updateNote(this.state.noteInput, this.state.experationDate);
  };

  render() {
    console.log(this.props);
    return (
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
                name='noteInput'
                value={this.state.updateNote.noteInput}
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
