import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import './index.css'
export default class Don_Vay extends Component {
    constructor(props) {
        super(props);
        this.state = {

            id: uuidv4(),
            name: "",
            email: "",
            address: "",
            phone: "",
            city: "",
            state: "",
            zip: "",
            date: "",
            ngay_cap: "",
            noi_cap: "",
            xung_danh: "",
            gioi_tinh: "",
            tien: "",
            muc_dich: "",
            ky_han: "",
            thu_nhap: "",
            gui_nhan_vien: false
        };
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.onValid = this.onValid.bind(this)
    }

    onValid() {
    
            this.setState({
                gui_nhan_vien: true
            })
        

        console.log(this.state.gui_nhan_vien)
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
        this.setState({
            gui_nhan_vien: true
        })
        console.log(this.state)
    }
    render() {
        return (
            <div className="container row">
                <Form className="col-md-8" onSubmit={this.onHandleSubmit}>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Họ và tên</Label>
                        <Col sm={10}>
                            <Input type="text" name="name" placeholder="with a placeholder" onChange={this.onHandleChange} value={this.state.name} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" placeholder="with a placeholder" onChange={this.onHandleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Địa chỉ</Label>
                        <Col sm={10}>
                            <Input type="text" name="address" placeholder="with a placeholder" onChange={this.onHandleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Số điện thoại</Label>
                        <Col sm={10}>
                            <Input type="number" name="phone" placeholder="with a placeholder" onChange={this.onHandleChange} />
                        </Col>
                    </FormGroup>
                    <Row form>
                        <Col md={2}></Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleCity">City</Label>
                                <Input type="text" name="city" id="exampleCity" onChange={this.onHandleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleState">State</Label>
                                <Input type="text" name="state" id="exampleState" onChange={this.onHandleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleZip">Zip</Label>
                                <Input type="number" name="zip" id="exampleZip" onChange={this.onHandleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Date</Label>
                        <Col sm={10}>
                            <Input type="date" name="date" placeholder="with a placeholder" onChange={this.onHandleChange} />
                        </Col>
                    </FormGroup>


                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Ngày cấp</Label>
                        <Col sm={10}>
                            <Input type="date" name="ngaycap" placeholder="with a placeholder" onChange={this.onHandleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Nơi cấp</Label>
                        <Col sm={10}>
                            <Input type="text" name="noi_cap" placeholder="with a placeholder" onChange={this.onHandleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label col-sm-2">Xưng danh</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="xung_danh" onChange={this.onHandleChange} />{' '}
              Ông
            </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="xung_danh" onChange={this.onHandleChange} />{' '}
             Bà
            </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                                <Label check>
                                    <Input type="radio" name="xung_danh" onChange={this.onHandleChange} />{' '}
             Cô
            </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label col-sm-2">Xưng danh</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="gioi_tinh" onChange={this.onHandleChange} />{' '}
              Nam
            </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="gioi_tinh" onChange={this.onHandleChange} />{' '}
             Nữ
            </Label>
                            </FormGroup>

                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Thu nhập hàng tháng</Label>
                        <Col sm={10}>
                            <Input type="number" name="thu_nhap" placeholder="with a placeholder" onChange={this.onHandleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Số tiền muốn vay</Label>
                        <Col sm={10}>
                            <Input type="number" name="tien" placeholder="with a placeholder" onChange={this.onHandleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Kỳ hạn</Label>
                        <Col sm={10}>
                            <Input type="number" name="ky_han" placeholder="with a placeholder" onChange={this.onHandleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Mục đích vay</Label>
                        <Col sm={10}>
                            <Input type="text" name="muc_dich" placeholder="with a placeholder" onChange={this.onHandleChange} />
                        </Col>
                    </FormGroup>
                    <div className="form-group">
                        <button type="submit" onClick={this.onValid} className="btn btn-primary btn-block"> Submit Request</button>
                    </div>
                </Form>
            </div >
        )
    }
}