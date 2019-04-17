import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNote } from '../../../actions'

import './Add.scss'

class Add extends Component {
    state = {
        message: ''
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

    toBlackHole = e => {
        e.preventDefault()
        e.stopPropagation()
    }

    render() {
        return (
            <div className='Add'>
                <form onSubmit={this.addNote}>
                    <textarea
                        onChange={this.handleChanges}
                        name='message'
                        value={this.state.message}
                        style={{ resize: 'none' }}
                        placeholder='THIS SOME BULL**** HOW YOU GON TELL ME HOW TA LIVE MY LIFE AFTER YOU WALK IN HERE AND LITERALLY SLAP ME IN THE FACE WITH YOUR WORDS'
                    />
                    <button className='to-orbit'>Send to Orbit</button>
                </form>
                <button
                    className='to-hole'
                    onClick={() => this.toBlackHole}
                >Send to Black Hole</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { addNote })(Add)
