import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import './index.css';

class SignupForm extends Component {
  render() {
    return (
      <Container className="container">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
          <FormGroup>
              <Label>Full name</Label>
              <Input
                type="text"
                name="Fullname"
                id="fullname"
                placeholder="Nguyen Van Canh"
              />
            </FormGroup>
            <FormGroup>
              <Label>Phone number</Label>
              <Input
                type="number"
                name="phone"
                id="phoneNumber"
                placeholder="123456789"
              />
            </FormGroup>
            <FormGroup>
              <Label>Age</Label>
              <Input
                type="number"
                name="age"
                id="age"
                placeholder="24"
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default SignupForm;