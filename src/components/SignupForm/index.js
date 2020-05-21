import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, FormText, CustomInput, CardImg } from 'reactstrap';
export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            email: "",
            password: "",
            re_password: "",
            tel: '',
            rule: true,
        };
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.validateForm = this.validateForm.bind(this)

    }


    validateForm() {
        //event.preventDefault()
        const name = this.state.name
        const email = this.state.email
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
        //console.log(this.state)
    }
    render() {
        //console.log(data)
        return (
            <Form onSubmit={this.onHandleSubmit} className="container col-xs-12" style={{ width: 500 }}>
                <FormGroup>
                    <FormGroup>
                        {this.state.nameError ? <FormText>Name required</FormText> : ''}
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user" /> </span>
                            </div>

                            <Input
                                name='name'
                                className="form-control"
                                placeholder="Full name"
                                type="text"
                                onChange={this.onHandleChange}
                            />

                        </div>

                    </FormGroup>
                    <FormGroup>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                            </div>
                            <Input
                                name='email'
                                className="form-control"
                                placeholder="Email"
                                type="email"
                                onChange={this.onHandleChange}

                            />



                        </div>
                    </FormGroup>
                    <FormGroup>
                        {this.state.passwordError ? <FormText>password sai</FormText> : ''}

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                            </div>
                            <Input
                                name='password'
                                className="form-control"
                                placeholder="Password"
                                type="password"
                                onChange={this.onHandleChange}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                            </div>
                            <Input
                                name='re_password'
                                className="form-control"
                                placeholder="Re-password"
                                type="password"
                                onChange={this.onHandleChange}
                            />
                        </div>
                    </FormGroup>
                    
                    <FormGroup>
                        <div className="form-group input-group">
                            <div style={{ padding: 0 }} className="form-group input-group col-md-4 col-xs-12">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                                </div>
                                <select className="custom-select" style={{}}>
                                    <option onChange={this.onHandleChange}>+971</option>
                                    <option onChange={this.onHandleChange} value={1}>+972</option>
                                    <option onChange={this.onHandleChange} value={2}>+198</option>
                                    <option onChange={this.onHandleChange} value={3}>+701</option>
                                </select>
                            </div>

                            <Input name="tel" className="form-control col-md-8 col-xs-12" placeholder="Phone number" type="text" />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-group input-group">
                            <div className="image">
                                <FormGroup className="file">
                                    <Label for="exampleCustomFileBrowser">File Browser</Label>
                                    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                                </FormGroup>
                                <CardImg bottom width="100%" src="http://dummyimage.com/149x144.jpg/dddddd/000000" alt="Card image cap" />
                            </div>
                            <div className="image">
                                <FormGroup className="file">
                                    <Label for="exampleCustomFileBrowser">File Browser</Label>
                                    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                                </FormGroup>
                                <CardImg bottom width="100%" src="http://dummyimage.com/149x144.jpg/dddddd/000000" alt="Card image cap" />
                            </div>
                        </div>

                    </FormGroup>
                   
                    <div className="form-group input-group">
                        <Input
                            style={{ width: 20, height: 20 }}
                            name='rule'
                            type="checkbox"
                            value={true}
                            onChange={this.onHandleChange}
                            checked={this.state.rule === true}
                        />
                        <p style={{ marginLeft: 20 }}>Chaasp</p>
                    </div>
                    <div className="form-group">
                        <button type="submit" onClick={this.validateForm} className="btn btn-primary btn-block"> Create Account</button>
                    </div>

                    <p className="text-center">Have an account? <a>Log In</a> </p>
                </FormGroup>
            </Form>
        )
    }
}



Register.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    job: PropTypes.string,
    rule: PropTypes.bool
}

// import React, { Component } from 'react';
// import {
//   Container, Col, Form,
//   FormGroup, Label, Input,
//   Button,
// } from 'reactstrap';
// import './index.css';

// class SignupForm extends Component {
//   render() {
//     return (
//       <Container className="container">
//         <h2>Sign In</h2>
//         <Form className="form">
//           <Col>
//           <FormGroup>
//               <Label>Full name</Label>
//               <Input
//                 type="text"
//                 name="Fullname"
//                 id="fullname"
//                 placeholder="Nguyen Van Canh"
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label>Phone number</Label>
//               <Input
//                 type="number"
//                 name="phone"
//                 id="phoneNumber"
//                 placeholder="123456789"
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label>Age</Label>
//               <Input
//                 type="number"
//                 name="age"
//                 id="age"
//                 placeholder="24"
//               />
//             </FormGroup>
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

// export default SignupForm;