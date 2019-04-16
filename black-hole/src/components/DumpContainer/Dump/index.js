import React from 'react';
import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../../../actions';

class Dump extends React.Component {
<<<<<<< HEAD
    state = {
        editing: false,
        updateNote: {
            noteInput: "",
            expirationDate: ""
        }
    };
=======
  state = {
    editing: false,
    updateNote: {
      noteInput: '',
      experationDate: ''
    }
  };
>>>>>>> a8c51191457a3185c6df5a1f20a4b87268d5d910

  handleInput = e => {
    this.setState({
      ...this.state,
      updateNote: {
        ...this.state.updateNote,
        [e.target.name]: e.target.value
      }
    });
  };

<<<<<<< HEAD
    handeUpdate = e => {
        e.preventDefault();
        this.props.note.updateNote(this.props.dump.id, this.state.updateNote);
    }
=======
  handeUpdate = e => {
    e.preventDefault();
    this.props.note.updateNote(this.state.noteInput, this.state.experationDate);
  };
>>>>>>> a8c51191457a3185c6df5a1f20a4b87268d5d910

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
            Input-Text:
            {this.state.editing ? (
<<<<<<< HEAD
                            <input
                                type="text"
                                name="noteInput"
                                value={this.state.updateNote.noteInput}
                                onChange={this.handleInput}
                            />
                        ) : (
                                this.props.dump.message
                            )}
                    </p>
                    <p>
                        Expiration Date:{" "}
                        {this.state.editing ? (
                            <input
                                type="date"
                                name="expirationDate"
                                value={this.state.updateNote.expirationDate}
                                onChange={this.handleInput}
                            />
                        ) : (
                                "DISPLAY EXPiRATION DATE HERE"
                            )}
                    </p>
                    <button>Enter</button>
                </form>
                <button onClick={() => this.props.deleteNote(this.props.dump.id)}>Delete</button>
            </div>
        );
    }
=======
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
>>>>>>> a8c51191457a3185c6df5a1f20a4b87268d5d910
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { updateNote, deleteNote }
)(Dump);
