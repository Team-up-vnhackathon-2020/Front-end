import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.validateForm = this.validateForm.bind(this)

    }


    validateForm() {
        //event.preventDefault()
        const name = this.state.name
        const password = this.state.password
        const re_password = this.state.re_password
        if (name.length <= 5) {
            this.setState({
                nameError: true
            })
        }
        else {
            this.setState({
                nameError: false
            })
        }

        if (password.length <= 15 || re_password !== password) {
            this.setState({
                passwordError: true
            })
        } else {
            this.setState({
                passwordError: false
            })
        }
    }

    onHandleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }
    onHandleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <form onSubmit={this.onHandleSubmit} className="container col-xs-12" style={{ width: 500 }}>

                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input
                        name='email'
                        className="form-control"
                        placeholder="Email"
                        type="email"
                        onChange={this.onHandleChange}
                    />
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                    </div>
                    <input
                        name='password'
                        className="form-control"
                        placeholder="Password"
                        type="password"
                        onChange={this.onHandleChange}
                    />
                    {this.state.passwordError ? <label>password sai</label> : ''}
                </div>
                <div className="form-group">
                    <button type="submit" onClick={this.validateForm} className="btn btn-primary btn-block"> Create Account</button>
                </div>

                <p className="text-center">Have an account? <p>Log In</p> </p>
            </form>
        )
    }
}



LoginForm.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    rule: PropTypes.bool.isRequired,
}

// import React, { Component } from 'react';
// import {
//   Container, Col, Form,
//   FormGroup, Label, Input,
//   Button,
// } from 'reactstrap';
// import './index.css';

// class LoginForm extends Component {
//   render() {
//     return (
//       <Container className="container">
//         <h2>Sign In</h2>
//         <Form className="form">
//           <Col>
//             <FormGroup>
//               <Label>Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 id="exampleEmail"
//                 placeholder="myemail@email.com"
//               />
//             </FormGroup>
//           </Col>
//           <Col>
//             <FormGroup>
//               <Label for="examplePassword">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 id="examplePassword"
//                 placeholder="********"
//               />
//             </FormGroup>
//           </Col>
//           <Button>Submit</Button>
//         </Form>
//       </Container>
//     );
//   }
// }

// export default LoginForm;