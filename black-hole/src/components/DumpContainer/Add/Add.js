import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../../actions';
import moment from 'moment';

import './Add.scss';

class Add extends Component {
  state = {
    message: {
      message: '',
      expirationDate: moment().format('YYYY/MM/DD'),
      numberOfDays: 7,
      user_id: localStorage.getItem('userId')
    },
    animation: false
  };

  handleChanges = e => {
    this.setState({
      ...this.state,
      message: {
        ...this.state.message,
        [e.target.name]: e.target.value
      }
    });
  };

  addNote = () => {
    this.props.addNote(this.state.message);
    this.props.unBool();
  };

  toBlackHole = () => {
    setTimeout(() => this.props.unBool(), 6000);
  };

  render() {
    return (
      <div className={`Add ${this.state.animation && 'blackholeAnimation'}`}>
        <p>What's on your mind today, {this.props.user.username}?</p>
        <form>
          <textarea
            onChange={this.handleChanges}
            name='message'
            value={this.state.message.message}
            style={{ resize: 'none' }}
            placeholder='Type out whatever you feel here, let out all emotions and tension.'
          />
          <div className='tio'>
            <span>Time in Orbit: </span>
            <select
              onChange={this.handleChanges}
              name='numberOfDays'
              defaultValue='7'
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
        <div className='add-btns'>
          <button onClick={() => this.addNote()} className='to-orbit'>
            Send to Orbit
          </button>
          <button
            className='to-hole'
            onClick={() => {
              this.setState({
                ...this.state,
                animation: true
              });
              this.toBlackHole();
            }}
          >
            Send to Black Hole
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};

export default connect(
  mapStateToProps,
  { addNote }
)(Add);
