import React from 'react'
import { connect } from 'react-redux';
import Dump from './Dump'
import './Dumps.scss'

const DumpContainer = props => {
    return (
        <div className='DumpContainer'>
            {props.dumps.map((dump, id) => (
                <Dump
                    dump={dump}
                    key={id}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dumps: state.note.notes
    }
}

export default connect(mapStateToProps)(DumpContainer)
