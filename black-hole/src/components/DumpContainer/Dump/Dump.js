import React from 'react';
import moment from 'moment';

export default props => {
    const filter = props.dump.message.replace(/([fsc][uh][cni][kt])/ig, '****').replace(/([b][i][t][c][h])/ig, '*****'),
        timeLeft = (originalTime, timeInOrbit) => {
            return moment(originalTime).add(timeInOrbit, 'days').fromNow(true)
        }

    return (
        <div className='note' onClick={() => props.toMessage(props.dump.id)}>
            <p className='message'>{filter}
            </p>
            <p className='time-left'>
                Time left in orbit: {timeLeft(props.dump.expirationDate, 7)}
            </p>
        </div>
    );
}
