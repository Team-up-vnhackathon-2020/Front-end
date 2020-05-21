import React, { Component } from 'react'
import './index.css'
import Layout from '../../Layout'
export default class Profile extends Component {
    render() {
        return (
            <Layout>
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
            <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="profile-head">
                                <h5>
                                    Nguyễn Văn A
          </h5>
                                <h6>
                                    Ngân hàng Á Châu
          </h6>
                                <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Giới thiệu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Đánh giá của khách hàng</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3">

                            <input type="submit" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" />
                        </div>
                        <div className="col-md-9">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Họ và tên</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Nguyễn Văn Tèo</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>nguyenvanteo@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Số điện thoại</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>123 456 7890</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Chức vụ</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Nhân viên ngân hàng</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Địa chỉ</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Cầu Giấy, Hà Nội</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <ul class="pagination" style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </Layout>
        )
    }
}
