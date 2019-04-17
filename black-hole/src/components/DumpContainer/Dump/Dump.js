import React from 'react';

export default props => {
    return (
        <div className='note' onClick={() => props.toMessage(props.dump.id)}>
            <p className='message'>{props.dump.message}
            </p>
            <p className='time-left'>
                Time left in orbit: {props.dump.expirationDate}
            </p>
        </div>
    );
}
