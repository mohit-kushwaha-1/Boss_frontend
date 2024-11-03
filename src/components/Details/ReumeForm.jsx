import React from "react";
import { Form, Input, Radio, Select, DatePicker, Button, Row, Col ,message} from "antd";
import '../../style/details/ResumeForm.css'
import axios from "axios";
import { baseUrl } from "../helper/helper";

const { Option } = Select;

const ReumeForm = () => {
  const onFinish = async(values) => {
       const postData = {
        firstName:values.firstName,
        lastName:values.lastName,
        dateOfBirth:values.dob,
        gender:values.gender,
        countryOfResidence:values.countryOfResidence,
        phoneNumber:values.phoneNumber,
        email:values.email,
        dutchPassport:values.dutchPassport,
        driversLicense:values.driversLicense,
        drivingLicenseCategory:values.drivingLicenseCategory,
        ownVehicle:values.ownVehicle,
        currentlyEmployed:values.currentlyEmployed
       }

       try {
          const response = await axios.post(`${baseUrl}/api/personal/personal-details`,postData)
          console.log("resume data is",response.data);
          if(response.data){
            message.success("Form submitted succesfuly")
          }
        } catch (error) {
        console.log(error)
        message.error("Error in submitting form")
       }

    //    console.log("postData",postData)
  };

  return (
    <div className="form-container">
      <h2>Personal Details</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "Please enter your first name" }]}
            >
              <Input placeholder="Enter First Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Please enter your last name" }]}
            >
              <Input placeholder="Enter Last Name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
        <Col span={12}>
        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: 'Please select your date of birth!' }]}
        >
          <input type="date" style={{ width: '100%' }} placeholder="Select Date" />
        </Form.Item>
      </Col>
          <Col span={12}>
            <Form.Item label="Gender" name="gender">
              <Select placeholder="M / F">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Country of Residence"
              name="countryOfResidence"
              rules={[{ required: true, message: "Please enter your country" }]}
            >
              <Input placeholder="Enter Your Residence Country" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true, message: "Please enter your phone number" }]}
            >
              <Input placeholder="Enter Phone Number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="E-mail Address"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input placeholder="Enter E-mail Address" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Do you have a valid Dutch passport or legal documents to work on St. Maarten?" name="dutchPassport">
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Valid Driver's License" name="driversLicense">
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Category of Driving License" name="drivingLicenseCategory">
              <Select placeholder="Select">
                <Option value="A">A</Option>
                <Option value="B">B</Option>
                <Option value="C">C</Option>
                <Option value="D">D</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Do you own a Vehicle?" name="ownVehicle">
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <h2>Work Experience</h2>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Are you currently Employed?" name="currentlyEmployed">
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ReumeForm;
