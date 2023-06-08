import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import moment from "moment";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // update doc ==========
  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/doctor/updateProfile",
        {
          ...values,
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {  
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrrong ");
    }
  };
  // update doc ==========

  //getDOc Details
  const getDoctorInfo = async () => { 
    console.log(params.id)
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById", 
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
    //eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <h1 className="text-center">Update Profile</h1> 
      {doctor && 
      <Form layout="vertical" onFinish={handleFinish} className="m-3" 
      initialValues={{
            ...doctor}}>
        <h4 className="">Personal Details : </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone No"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="email" placeholder="your email address" />
            </Form.Item>
          </Col> 
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Gender"
              name="gender"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your gender" />
            </Form.Item>
          </Col> 
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Father Name"
              name="fatherName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your father name" />
            </Form.Item>
          </Col> 
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Mother Name"
              name="motherName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your Mother name" />
            </Form.Item>
          </Col> 
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Aadhar Number" name="aadhar" > 
              <Input type="text" placeholder="your Aadhar Numbar" />
            </Form.Item>
          </Col> 
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Age" name="age" required
              rules={[{ required: true }]}>
              <Input type="text" placeholder="your Age" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your clinic address" />
            </Form.Item>
          </Col> 
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Marital Status"
              name="maritalStatus"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your marital status" />
            </Form.Item>
          </Col> 
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Number of Children" name="children" > 
              <Input type="text" placeholder="your number of children" />
            </Form.Item>
          </Col>  
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Session Id"
              name="sessionId"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your session Id" />
            </Form.Item>
          </Col>  
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Attendance"
              name="sessionAttendance"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Mark Your Attendance" />
            </Form.Item>
          </Col>  
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Is Benefitted"
              name="isBenefitted"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="FeedBack" />
            </Form.Item>
          </Col> 
        </Row> 
        <h4>Educational Details :</h4>
        <Row gutter={20}>
        <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Qualification"
              name="qualification"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your qualification" />
            </Form.Item>
          </Col>  
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Child Education"
              name="childEducation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your child Education" />
            </Form.Item>
          </Col> 

        </Row>
        <h4>Medical Details :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Past Major Injury"
              name="pastMajorInjury"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="write NA if not any" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Existing Illness"
              name="existingIllness"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="write NA if not any" />
            </Form.Item>
          </Col> 
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Allergies"
              name="allergies"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="write NA if not any" />
            </Form.Item>
          </Col> 
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Blood Group"
              name="bloodgroup"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="write NA if u havent checked" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary form-btn" type="Submit">
              Update
            </button>
          </Col>
        </Row>
      </Form> }
    </Layout>
  );
};

export default Profile;