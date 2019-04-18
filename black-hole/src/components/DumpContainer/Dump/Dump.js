import React from 'react';
import moment from 'moment';

export default props => {
  console.log(props);
  let filter = props.dump.message
      .replace(/([fsc][uh][cni][kt])/gi, '****')
      .replace(/([b][i][t][c][h])/gi, '*****'),
    timeLeft = (originalTime, timeInOrbit) => {
      return moment(originalTime)
        .add(timeInOrbit, 'days')
        .fromNow(true);
    };

  return (
    <div className='note' onClick={() => props.toMessage(props.dump.id)}>
      <p className='message'>{filter}</p>
      <p className='time-left'>
        Time left in orbit:{' '}
        {timeLeft(props.dump.expirationDate, props.dump.numberOfDays)}
      </p>
    </div>
  );
};
