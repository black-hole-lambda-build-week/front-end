import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions'
import './Login.scss'

class Login extends Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.user)
    }

    render() {
        return (
            <div
                className='Login'
                style={{
                    display: this.props.loggingIn ?
                        'flex' :
                        'none'
                }}>
                <h2>Log In</h2>
                <form onSubmit={this.login}>
                    <label>Username:</label>
                    <input
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChanges}
                        type='text'
                    />
                    <label>Password:</label>
                    <input
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChanges}
                        type='password'
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn
    }
}

export default connect(mapStateToProps, { login })(Login);
