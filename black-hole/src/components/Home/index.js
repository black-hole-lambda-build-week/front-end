import React from 'react'
import { connect } from 'react-redux';
import { toLogin } from '../../actions';
import './Home.scss'

const Home = props => {
    console.log(props)
    return (
        <div className='Home'>
            <div className='header' />
            <p>Have you ever had a bad experience and wanted to say something without them hearing what you said?</p>
            <p>Black Hole is here for that exact purpose. The capability to vent without repercussions is now here. Click the button below to get signed up!</p>
            <button onClick={() => props.toLogin()}>Log In</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {};
}

export default connect(mapStateToProps, { toLogin })(Home)
