import React from 'react';
import { connect } from 'react-redux';
import { toLogin } from '../../actions';
import './Home.scss';

import logo from '../../images/logo_uncolored.png';
import blackhole from '../../images/animator.gif';

const Home = props => {
  return (
    <>
      <div className='Home'>
        <img src={logo} alt='blackhole' className='home-logo' />
        <p className='home-caption'>
          Have you ever had a bad experience and wanted to say something without
          them hearing what you said?
        </p>
        <p className='home-caption bottom-caption'>
          Black Hole is here for that exact purpose. The capability to vent
          without repercussions is now here. Click the button below to get
          signed up!
        </p>
        <button onClick={() => props.toLogin()} className='login-btn'>
          Log In
        </button>
      </div>
      <img src={blackhole} className='blackhole' alt='' />
    </>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { toLogin }
)(Home);
