import React from "react";
import "../index.css";
import { connect } from "react-redux";
import { addNote } from "../actions";

class ListNotes extends React.Component {
  state = {
    newNote: {
      noteInput: "",
      expirationDate: ""
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNote({
      noteInput: this.state.newNote.noteInput,
      expirationDate: this.state.newNote.expirationDate
    });
    this.setState({ noteInput: "", expirationDate: "" });
  };

  render() {
    return (
      <form className="form__container" onSubmit={this.handleSubmit}>
        <p>
          Input-Text
          <input
            className="form__input"
            type="text"
            name="noteInput"
            value={this.state.newNote.noteInput}
            onChange={this.handleChange}
          />
        </p>
        <p>
          Expiration Date
          <input
            className="form__input "
            type="date"
            name="expirationDate"
            value={this.state.newNote.expirationDate}
            onChange={this.handleChange}
          />
        </p>
        <button className="button">Send Note</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addNote }
)(ListNotes);
