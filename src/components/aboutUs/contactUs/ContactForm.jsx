import React from 'react';
import { Form, Input, Button } from 'antd';
// import './ContactForm.css'; // Import the CSS file
import '../../../style/AboutUs/contactUs/ContactUsForm.css'
const { TextArea } = Input;

const ContactForm = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
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
            <TextArea rows={4} placeholder="Your Question" />
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
