import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNote } from '../../../actions'

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

    render() {
        return (
            <div>
                <form onSubmit={this.addNote}>
                    <textarea
                        onChange={this.handleChanges}
                        name='message'
                        value={this.state.message}
                        style={{ resize: 'none' }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { addNote })(Add)
