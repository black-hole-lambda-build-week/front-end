import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../../../../actions'

class Message extends Component {
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

    deleteNote = () => {
        this.props.deleteNote(this.props.dump.id);
        this.props.unMessage()
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
        })
        this.props.unMessage()
    }

    render() {
        return (
            <div className='Message'>
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
                            <textarea
                                type='text'
                                name='message'
                                value={this.state.updateNote.message}
                                onChange={this.handleInput}
                                style={{ resize: 'none' }}
                            />
                        ) : (
                                this.props.dump.message
                            )}
                    </p>
                    {/* <p className='time-left'>
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
                    </p> */}
                    <button>Add</button>
                </form>
                <button onClick={() => this.deleteNote()}>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(
    mapStateToProps,
    { updateNote, deleteNote }
)(Message);
