import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login, register } from '../../actions'
import './Login.scss'

class Login extends Component {
    state = {
        user: {
            username: '',
            password: ''
        },
        registered: localStorage.getItem('user') ? true : false
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

    register = e => {
        e.preventDefault();
        this.props.register(this.state.user)
        this.setState({
            ...this.state,
            user: {
                username: '',
                password: ''
            },
            registered: true
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.user)
    }

    render() {
        if (this.state.registered) {
            return (
                <div className='Login'>
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
                    <span
                        className='log'
                        onClick={() => this.setState({ ...this.state, registered: false })}
                    >Not a Member Yet?</span>
                </div>
            )
        } else {
            return (
                <div className='Login'>
                    <h2>Register</h2>
                    <form onSubmit={this.register}>
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
                    <span className='log' onClick={() => this.setState({ ...this.state, registered: true })}>Already Signed Up?</span>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn
    }
}

export default connect(mapStateToProps, { login, register })(Login);
