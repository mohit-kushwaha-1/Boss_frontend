import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Upload,message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import '../../style/details/form.css';
import axios from 'axios';
import { baseUrl } from '../helper/helper';
const ApplicationForm = () => {
  const [file, setFile] = useState(null);
  const[image,setImage] = useState();

  const handleFileChange = async(info) => {
    const { status, name } = info.file;
    if (status === 'done') {
      setFile(name);
    } else if (status === 'error') {
      console.error(`${name} file upload failed.`);
    }



    const formData = new FormData();
    formData.append("image", info.file);
    // console.log(file.file.name);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/uploadImage/uploadImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );


       if(response){
        console.log(response.data.imageUrl)
        message.success("Image uploaded successfully!");
        setImage(response.data.imageUrl);
       }
      
      
      return response.data.imageUrl// Assuming the API returns the image URL in the 'url' field
    } catch (error) {
      message.error("Error uploading image. Please try again later.");
      console.error("Image upload error:", error);
      return null;
    }
  };

  const onFinish = async(values) => {
        
    const formdata ={
      firstName:values.firsName,
      lastName:values.lastName,
      phoneNumber:values.phoneNumber,
      email:values.email,
      pdf:image,

    }


    try {
        const response = await axios.post(`${baseUrl}/api/sendApplication/createSendApplication`,formdata);
        console.log("response",response)

        if(response.data){
          message.success("form submmited succesfully")
        }
    } catch (error) {
         console.log(error);
    }
  };

  return (
    <div className="form-container-main">
      <div className="form-container">
        <h2>Interested? Send us your application!</h2>
        <Form layout="vertical" onFinish={onFinish} className="form-content">
          {/* First and Last Name Fields */}
       
        
        <div className='form-aligh-style'>
          <div className='form-aligh-style-left'>
          <div className="row">

          <Form.Item
              name="firsName"
              // label="First name"
              rules={[{ required: true, message: 'Please enter your last name!' }]}
              className="input-half"
            >
              <Input placeholder="Last name *" style={{height:"50px"}}/>
            </Form.Item>
            
            <Form.Item
              name="lastName"
              // label="Last name"
              rules={[{ required: true, message: 'Please enter your last name!' }]}
              className="input-half"
            >
              <Input placeholder="Last name *" style={{height:"50px"}}/>
            </Form.Item>
          </div>

          {/* Phone Number */}
          <Form.Item
            name="phoneNumber"
            // label="Phone number"
            rules={[{ required: true, message: 'Please enter your phone number!' }]}
          >
            <Input placeholder="Phone number" style={{height:"50px"}}/>
          </Form.Item>

          {/* Email Address */}
          <Form.Item
            name="email"
            // label="E-mail address"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input placeholder="E-mail address *" style={{height:"50px"}}/>
          </Form.Item>
          </div>

          

          {/* File Upload */}

          <div className='form-aligh-style-right'>
             
          <Form.Item
            name="resume"
            // label="Resume Upload"
            rules={[{ required: true, message: 'Please upload your resume!' }]}
            className="upload-box"
          >
            <Upload.Dragger
              name="file"
              multiple={false}
              beforeUpload={() => false} // Prevents auto-upload
              onChange={handleFileChange}
              style={{ width: '100%' }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                {file ? file : 'Resume Upload (required)'}
              </p>
              <p className="ant-upload-hint">Drag & Drop or Browse</p>
            </Upload.Dragger>
          </Form.Item>

          </div>

          </div>
          

          {/* Privacy Agreement Checkbox */}
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject('You must agree to the privacy policy!'),
              },
            ]}
          >
            <Checkbox>I agree with the privacy conditions.</Checkbox>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-button" id='submit-button'>
              Send Application
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ApplicationForm;
