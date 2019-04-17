import React from 'react';

export default props => {
    const filter = props.dump.message.replace(/([fsc][uh][cni][kt])/ig, '****').replace(/([b][i][t][c][h])/ig, '*****')

    return (
        <div className='note' onClick={() => props.toMessage(props.dump.id)}>
            <p className='message'>{filter}
            </p>
            <p className='time-left'>
                Time left in orbit: {props.dump.expirationDate}
            </p>
        </div>
    );
}
