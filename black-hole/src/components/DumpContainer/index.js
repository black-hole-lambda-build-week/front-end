import React from 'react'
import { connect } from 'react-redux';
import Dump from './Dump'
import './Dumps.scss'
import { fetchingData, addNote } from '../../actions'

class DumpContainer extends React.Component {
    state = {
        message: ''
    }

    componentDidMount() {
        this.props.fetchingData();
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            message: e.target.value
        })
    }

    add = e => {
        e.preventDefault()
        this.props.addNote(this.state)
    }

    render() {
        return (
            <div className='DumpContainer'>
                {this.props.dumps.map((dump, id) => (
                    <Dump
                        dump={dump}
                        key={id}
                    />
                ))}
                <form onSubmit={this.add}>
                    <input
                        onChange={this.handleChanges}
                        name='message'
                        value={this.state.message}
                        type='text'
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dumps: state.note.notes
    }
}

export default connect(mapStateToProps, { fetchingData, addNote })(DumpContainer)