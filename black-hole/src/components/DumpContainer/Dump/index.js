import React from "react";
import { connect } from "react-redux";
import { updateNote, deleteNote } from "../../../actions";

class Dump extends React.Component {
    state = {
        editing: false,
        updateNote: {
            noteInput: "",
            expirationDate: ""
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
        this.props.note.updateNote(this.props.dump.id, this.state.updateNote);
    }

    render() {
        console.log(this.props)
        return (
            <div className="Note">
                <button
                    onClick={() => this.setState({
                        ...this.state, editing: true
                    })}
                    style={{
                        display: !this.state.editing ? "block" : "none"
                    }}
                >
                    Edit Entry
        </button>

                <form onSubmit={this.handleUpdate}>
                    <p>
                        Input-Text:
            {this.state.editing ? (
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
}
const mapStateToProps = state => {
    return state;
};

export default connect(
    mapStateToProps,
    { updateNote, deleteNote }
)(Dump);
