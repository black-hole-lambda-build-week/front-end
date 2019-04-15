import React from 'react'
import './Dump.scss'

const Dump = props => {
    return (
        <div className='Dump'>
            {props.dump.content}
        </div>
    )
}

export default Dump
