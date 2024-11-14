import React, { useState } from "react";
import { Form, Input, Radio, Select, DatePicker, Button, Row, Col, message, TimePicker } from "antd";
import '../../style/details/ResumeForm.css'
import axios from "axios";
import { baseUrl } from "../helper/helper";

const { Option } = Select;
const { TextArea } = Input;

const ReumeForm = ({ title, setIsModalVisible, setResumeData, setCondition }) =>
{
  const [isLicenseValid, setIsLicenseValid] = useState(true);
  const [form] = Form.useForm();


  const handleLicenseChange = (e) =>
  {
    setIsLicenseValid(e.target.value === 'yes');
  };


  const onFinish = async (values) =>
  {
    const postData = {
      firstName: values.firstName,
      lastName: values.lastName,
      dateOfBirth: values.dob,
      gender: values.gender,
      countryOfResidence: values.countryOfResidence,
      phoneNumber: values.phoneNumber,
      email: values.email,
      dutchPassport: values.dutchPassport,
      driversLicense: values.driversLicense,
      drivingLicenseCategory: values.drivingLicenseCategory,
      ownVehicle: values.ownVehicle,
      currentlyEmployed: values.currentlyEmployed,
      jobTitle: values.jobTitle,
      companyName1: values.companyName1,
      jobTitle1: values.jobTitle,
      DOS: values.dateInService,
      RFL: values.reason,
      HAW: values.hourstoAvailable,
      day: values.day,
      WorkE: values.evening,
      WorkN: values.night,
      startTime: values.starttime,
      finishTime: values.lasttime,
      highEducatioin: values.highest,
      companyName: values.companyName,
      job: title,
    }

    setResumeData(postData)
    setCondition(true)

    message.success("Details Submitted Successfully");
    // form.resetFields();
    setIsModalVisible(false)


    //  try {
    //     const response = await axios.post(`${baseUrl}/api/personal/personal-details`,postData)
    //     console.log("resume data is",response.data);
    //     if(response.data){
    //       message.success("Form Submitted Successfully");
    //       setIsModalVisible(false)
    //       form.resetFields();
    //     }
    //   } catch (error) {
    //   console.log(error)
    //   message.error("Error In Submission Form")
    //  }

    //    console.log("postData",postData)
  };

  return (
    <div className="form-container">
      <h2 style={{ fontSize: '24px' }}>Personal Details</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "Please Enter Your First Name" }]}
            >
              <Input placeholder="Enter First Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Please Enter Your Last name" }]}
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
              rules={[{ required: true, message: 'Please Select Your DDate of Birth!' }]}
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
              rules={[{ required: true, message: "Please Enter Your Country" }]}
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
              rules={[{ required: true, message: "Please Enter Your Phone Number" }]}
            >
              <Input placeholder="Enter Phone Number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="E-mail Address"
              name="email"
              rules={[{ required: true, message: "Please Enter Your Email" }]}
            >
              <Input placeholder="Enter E-mail Address" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Do You Have a Valid Dutch Passport or Legal Documents to Work on St. Maarten?" name="dutchPassport">
              <Radio.Group  >
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Valid Driver's License" name="driversLicense">
              <Radio.Group onChange={handleLicenseChange}>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Category of Driving License" name="drivingLicenseCategory">
              <Select placeholder="Select" disabled={!isLicenseValid}>

                <Option value="B">B</Option>
                <Option value="C">C</Option>
                <Option value="D">D</Option>
                <Option value="A">E</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Do You Own a Vehicle?" name="ownVehicle">
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <h2 style={{ fontSize: '24px' }}>Work Experience</h2>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Are You Currently Employed?" name="currentlyEmployed">
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>


        <h6>If Yes, Please Specify Your Employer:</h6>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Company Name"
              name="companyName"
            // rules={[{ required: true, message: "Please enter your Company Name" }]}
            >
              <Input placeholder="Enter Company Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Job Title"
              name="jobTitle"
            // rules={[{ required: true, message: "Please enter your Job Title" }]}
            >
              <Input placeholder="Enter Job Title" />
            </Form.Item>
          </Col>
        </Row>



        <h6>Last or Most Relevant Work Experience</h6>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Company Name"
              name="companyName1"
            // rules={[{ required: true, message: "Please enter your Company Name" }]}
            >
              <Input placeholder="Enter Company Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Job Title"
              name="jobTitle1"
            // rules={[{ required: true, message: "Please enter your Job Title" }]}
            >
              <Input placeholder="Enter Job Title" />
            </Form.Item>
          </Col>
        </Row>


        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Date In Service"
              name="dateInService"
            // rules={[{ required: true, message: "Please enter your Date In Service" }]}
            >
              <Input placeholder="Enter Date In Service" type="date" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Date Out of Service"
              name="dateOfOut"
            // rules={[{ required: true, message: "Please enter your Job Title" }]}
            >
              <Input placeholder="Enter  Date Out of Service" type="date" />
            </Form.Item>
          </Col>
        </Row>


        <Form.Item
          label="Reason For Leaving"
          name="reason"
        >
          <TextArea
            placeholder="Type Here"
            style={{ width: '80%', height: '70px' }}
          />
        </Form.Item>


        <h2 style={{ fontSize: '24px' }}>Availability</h2>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="How Many Hours Per Week Can You Work ?"
              name="hourstoAvailable"
            // rules={[{ required: true, message: "Please enter your Date In Service" }]}
            >
              <Input placeholder="Enter Work Hours" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="How Many Days Per Week You Can Work ?"
              name="day"
            // rules={[{ required: true, message: 'Please select a day!' }]}
            >
              <Select placeholder="Select Number of Days">
                {[...Array(7)].map((_, index) => (
                  <Option key={index + 1} value={index + 1}>
                    {index + 1} {index + 1 === 1 ? 'day' : 'days'}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>



        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Can You Work Evenings?"
              name="evening"
            // rules={[{ required: true, message: 'Please select a day!' }]}
            >
              <Select placeholder="Select" >
                <Option value="Yes">Yes</Option>
                <Option value="No">No</Option>

              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Can You Work Nights?"
              name="night"
            // rules={[{ required: true, message: 'Please select a day!' }]}
            >
              <Select placeholder="Select" >
                <Option value="Yes">Yes</Option>
                <Option value="No">No</Option>

              </Select>
            </Form.Item>
          </Col>
        </Row>


        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Earliest Start Time"
              name="starttime"
            // rules={[{ required: true, message: 'Please select a Start time!' }]}
            >
              <TimePicker use12Hours format="h:mm A" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Latest Finish Time"
              name="lasttime"
            // rules={[{ required: true, message: 'Please select a time!' }]}
            >
              <TimePicker use12Hours format="h:mm A" />
            </Form.Item>
          </Col>
        </Row>

        <h2 style={{ fontSize: '24px' }}>Education</h2>
        <Form.Item
          label=" Highest Level of Education Completed: "
          name="highest"
        // rules={[{ required: true, message: 'Please input some text!' }]}
        >
          <Input placeholder="Enter Your Highest Education" style={{ width: '80%' }} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ReumeForm;
