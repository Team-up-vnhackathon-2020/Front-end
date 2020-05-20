import React, { Component } from 'react';
import Layout from '../../Layout'
import SignupForm from '../../components/SignupForm'
import './index.css';

class Signup extends Component {
  render() {
    return (
      <Layout>
        <SignupForm/>
      </Layout>
    );
  }
}

export default Signup;