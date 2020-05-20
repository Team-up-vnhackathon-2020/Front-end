import React, { Component } from 'react';
import Layout from '../../Layout'
import LoginForm from '../../components/LoginForm'
import './index.css';

class Login extends Component {
  render() {
    return (
      <Layout>
        <LoginForm/>
      </Layout>
    );
  }
}

export default Login;