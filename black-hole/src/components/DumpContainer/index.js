import React from 'react';
import { connect } from 'react-redux';
import Dump from './Dump';
import './Dumps.scss';
import { fetchingData } from '../../actions';

import bg from '../../images/bg2.jpg';

class DumpContainer extends React.Component {
  componentDidMount() {
    this.props.fetchingData();
  }

  render() {
    return (
      <>
        <div className='DumpContainer'>
          <h1 className='dump-header'>In Orbit</h1>
          {this.props.dumps.map((dump, id) => (
            <Dump dump={dump} key={id} className='message' />
          ))}
        </div>
        <img src={bg} alt='' className='background' />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    dumps: state.note.notes
  };
};

export default connect(
  mapStateToProps,
  { fetchingData }
)(DumpContainer);
