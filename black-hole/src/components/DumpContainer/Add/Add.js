import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNote } from '../../../actions'
import moment from 'moment'

import './Add.scss'

class Add extends Component {
    state = {
        message: '',
        expirationDate: moment().format('YYYY/MM/DD'),
        numberOfDays: 7,
        user_id: localStorage.getItem('userId')
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNote = e => {
        e.preventDefault()
        this.props.addNote(this.state)
        this.props.unBool()
    }

    toBlackHole = () => {
        setTimeout(() => this.props.unBool(), 10000)
    }

    render() {
        return (
            <div className='Add'>
                <p>What's on your mind today, {this.props.user.username}?</p>
                <form onSubmit={this.addNote}>
                    <textarea
                        onChange={this.handleChanges}
                        name='message'
                        value={this.state.message}
                        style={{ resize: 'none' }}
                        placeholder='THIS SOME BULL**** HOW YOU GON TELL ME HOW TA LIVE MY LIFE AFTER YOU WALK IN HERE AND LITERALLY SLAP ME IN THE FACE WITH YOUR WORDS'
                    />
                    <button className='to-orbit'>Send to Orbit</button>
                    <div className='tio'>
                        <span>Time in Orbit: </span>
                        <select
                            onChange={this.handleChanges}
                            name='numberOfDays'
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7" defaultValue selected>7</option>
                        </select>
                        <span> days</span>
                    </div>
                </form>
                <button
                    className='to-hole'
                    onClick={() => this.toBlackHole()}
                >Send to Black Hole</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps, { addNote })(Add)
