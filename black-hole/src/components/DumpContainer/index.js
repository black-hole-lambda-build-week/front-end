import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import Dump from './Dump'
import './Dumps.scss'
import { fetchingData, addNote } from '../../actions'

class DumpContainer extends React.Component {
    state = {
        message: '',
        expiration: ''
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
        this.props.addNote(this.state.message)
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
=======
import Dump from './Dump';
import './Dumps.scss';
import { fetchingData } from '../../actions';

class DumpContainer extends React.Component {
  componentDidMount() {
    this.props.fetchingData();
  }

  render() {
    return (
      <div className='DumpContainer'>
        <h1 className='dump-header'>In Orbit</h1>
        {this.props.dumps.map((dump, id) => (
          <Dump dump={dump} key={id} className='message' />
        ))}
      </div>
    );
  }
>>>>>>> a8c51191457a3185c6df5a1f20a4b87268d5d910
}

const mapStateToProps = state => {
  return {
    dumps: state.note.notes
  };
};

<<<<<<< HEAD
export default connect(mapStateToProps, { fetchingData, addNote })(DumpContainer)
=======
export default connect(
  mapStateToProps,
  { fetchingData }
)(DumpContainer);
>>>>>>> a8c51191457a3185c6df5a1f20a4b87268d5d910
