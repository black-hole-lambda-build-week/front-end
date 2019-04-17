import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../../../../actions'
import './Message.scss'

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
                <form onSubmit={this.handleUpdate}>
                    {this.state.editing ? (
                        <textarea
                            type='text'
                            name='message'
                            value={this.state.updateNote.message}
                            onChange={this.handleInput}
                            style={{ resize: 'none' }}
                            placeholder={this.props.dump.message}
                        />
                    ) : (
                            this.props.dump.message
                        )}
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
                    <button
                        className='to-orbit'
                        style={{
                            display: this.state.editing ? 'block' : 'none'
                        }}
                    >Send to Orbit</button>
                </form>
                <button
                    className='to-orbit'
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
                <button
                    className='to-hole'
                    onClick={() => this.deleteNote()}
                >Send to Black Hole</button>
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
