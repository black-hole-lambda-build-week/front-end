import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../../../../actions';
import moment from 'moment';
import './Message.scss';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      animation: false,
      updateNote: {
        message: this.props.dump.message,
        expirationDate: moment().format('YYYY/MM/DD'),
        numberOfDays: 7
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
    setTimeout(() => {
      this.props.deleteNote(this.props.dump.id);
      this.props.unMessage();
    }, 6000);
  };

  handleUpdate = () => {
    this.props.updateNote(this.props.dump.id, this.state.updateNote);
    this.setState({
      ...this.state,
      editing: false,
      updateNote: {
        ...this.state.updateNote,
        message: ''
      }
    });
    this.props.unMessage();
  };

  render() {
    console.log(this.state.animation);
    return (
      <div className='message-container'>
        <div
          className={`Message ${this.state.animation && 'blackholeAnimation'}`}
        >
          <form>
            {this.state.editing ? (
              <textarea
                type='text'
                name='message'
                value={this.state.updateNote.message}
                onChange={this.handleInput}
                style={{ resize: 'none' }}
                placeholder={this.props.dump.message}
              >
                {this.props.dump.message}
              </textarea>
            ) : (
                <span className='priorMessage'>{this.props.dump.message}</span>
              )}
            <div
              className='tio'
              style={{
                display: !this.state.editing && 'none'
              }}
            >
              <span>Time in Orbit: </span>
              <select
                name='numberOfDays'
                defaultValue='7'
                onChange={this.handleInput}
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
              </select>
              <span> days</span>
            </div>
          </form>
          <div className='edit-btns-container'>
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
              onClick={() => this.handleUpdate()}
              className='to-orbit'
              style={{
                display: this.state.editing ? 'block' : 'none'
              }}
            >
              Send to Orbit
            </button>
            <button
              className='to-hole'
              onClick={() => {
                this.setState({
                  ...this.state,
                  animation: true
                });
                this.deleteNote();
              }}
            >
              Send to Black Hole
            </button>
          </div>
        </div>
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
)(Message);
