import React from 'react';
import { Form, Input, Button,message } from 'antd';
// import './ContactForm.css'; // Import the CSS file
import '../../../style/AboutUs/contactUs/ContactUsForm.css'
const { TextArea } = Input;
import { baseUrl } from '../../helper/helper';
import axios from 'axios';

const ContactForm = () => {
  const [form] = Form.useForm();
  const onFinish = async(values) => {
    console.log('Form values:', values);
// "firstName": "mukesh",
//     "lastName":"kushwaha",
//     "phoneNumber":"9889987876",
//     "email":"mukesh@gmail.com",
//     "question":"I want to applied job"
    const postdata = {
      firstName:values.firstName,
      lastName:values.lastName,
      phoneNumber:values.phoneNumber,
      email:values.email,
      question:values.yourQuestion,
    }

    try {
      const response = await axios.post(`${baseUrl}/api/contacts/createContact`,postdata);
      console.log("response",response)

      if(response.data.success){
        message.success("form submmited succesfully")
        form.resetFields();
      }
      else{
        message.error("error in form submition");
      }
  } catch (error) {
       console.log(error);
       message.error("error in form submition");
  }
  };

  return (
    <div className="contact-form-container">

        <div className='form-container'>
        <h2>Ready For the Next Step?</h2>
      <div className="form-box">
        <Form layout="vertical" onFinish={onFinish}>
          <div className="form-row">
            <Form.Item
            //   label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input placeholder="First Name *" style={{height:"50px"}} className='input-box'/>
            </Form.Item>
            <Form.Item
            //   label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name!' }]}
            >
              <Input placeholder="Last Name *" style={{height:"50px"}} className='input-box'/>
            </Form.Item>
          </div>
          <Form.Item
            // label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input placeholder="Phone Number" style={{height:"50px"}}/>
          </Form.Item>
          <Form.Item
            // label="Your Question"
            name="yourQuestion"
            rules={[{ required: true, message: 'Please input your question!' }]}
          >
            <TextArea rows={4} placeholder="Your Question *" />
          </Form.Item>
          <Form.Item
            // label="E-mail Address"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email address!' }]}
          >
            <Input placeholder="E-mail Address *" style={{height:"50px"}}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-btn" style={{hover:'backgour-color:red'}}>
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
        </div>
     
    </div>
  );
};

export default ContactForm;
