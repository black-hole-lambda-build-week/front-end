import React from 'react';
import { connect } from 'react-redux';
import Dump from './Dump';
import Message from './Dump/Message/Message'
import './Dumps.scss';
import { fetchingData, addNote } from '../../actions';

import bg from '../../images/bg2.jpg';

class DumpContainer extends React.Component {
    state = {
        message: {
            id: '',
            bool: false
        }
    };

    componentDidMount() {
        this.props.fetchingData();
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            message: e.target.value
        });
    };

    toMessage = id => {
        this.setState({
            ...this.state,
            message: {
                id: id,
                bool: true
            }
        })
    }

    unMessage = () => {
        this.setState({
            ...this.state,
            message: {
                id: '',
                bool: false
            }
        })
    }

    render() {
        return (
            <>
                <div className='DumpContainer'>
                    <h1 className='dump-header'>In Orbit</h1>
                    {this.state.message.bool ?
                        <Message
                            dump={this.props.dumps[this.props.dumps.findIndex(dump => dump.id === this.state.message.id)]}
                            unMessage={this.unMessage}
                        /> :
                        this.props.dumps.map((dump, id) => (
                            <Dump dump={dump} toMessage={this.toMessage} key={id} />
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
    { fetchingData, addNote }
)(DumpContainer);
