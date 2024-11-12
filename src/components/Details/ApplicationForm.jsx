import React, { useState } from 'react';
import { Modal, Form, Input, Button, Checkbox, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import '../../style/details/form.css';
import ReumeForm from './ReumeForm';
import axios from 'axios';
import { baseUrl } from '../helper/helper';

const ApplicationForm = ({title}) =>
{
  const [file, setFile] = useState(null);
  const [image, setImage] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();


  const showModal = () =>
  {
    setIsModalVisible(true);
  };

  const handleCancel = () =>
  {
    setIsModalVisible(false);
  };



  const handleFileChange = async (info) =>
  {
    const { status, name } = info.file;
    if (status === 'done')
    {
      setFile(name);
    } else if (status === 'error')
    {
      console.error(`${ name } file upload failed.`);
    }



    const formData = new FormData();
    formData.append("image", info.file);
    // console.log(file.file.name);

    try
    {
      const response = await axios.post(
        `${baseUrl}/api/uploadImage/uploadImage1`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );


      if (response)
      {
        console.log(response.data.imageUrl)
        message.success("Image Uploaded Successfully!");
        setImage(response.data.imageUrl);
      }


      return response.data.imageUrl// Assuming the API returns the image URL in the 'url' field
    } catch (error)
    {
      message.error("Error uploading Image. Please Try Again Later.");
      console.error("Image Upload Error:", error);
      return null;
    }
  };

  const onFinish = async (values) =>
  {

    const formdata = {
      firstName: values.firsName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      email: values.email,
      pdf: image,
      job:title,

    }


    try
    {
      const response = await axios.post(`${ baseUrl }/api/sendApplication/createSendApplication`, formdata);
      console.log("response", response)

      if (response.data)
      {
        message.success("Form Submmited Succesfully");
        form.resetFields();
      }
    } catch (error)
    {
      console.log(error);
    }
  };

  const handdleClick = (e) =>
  {
    e.preventDefault();
    setIsModalVisible(true);
  }


  return (
    <div className="form-container-main" id="apply-section">
      <div className="form-container">
        <h2>Interested? Send us <br />your application!</h2>
        <Form form={form} layout="vertical" onFinish={onFinish} className="form-content">
          {/* First and Last Name Fields */}


          <div className='form-aligh-style'>
            <div className='form-aligh-style-left'>
              <div className="row">

                <Form.Item
                  name="firsName"
                  // label="First name"
                  rules={[{ required: true, message: 'Please enter your first name!' }]}
                  className="input-half"
                >
                  <Input placeholder="First Name*" style={{ height: "50px" }} />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  // label="Last name"
                  rules={[{ required: true, message: 'Please enter your last name!' }]}
                  className="input-half"
                >
                  <Input placeholder="Last Name*" style={{ height: "50px" }} />
                </Form.Item>
              </div>

              {/* Phone Number */}
              <Form.Item
                name="phoneNumber"
                // label="Phone number"
                rules={[{ required: true, message: 'Please enter your phone number!' }]}
              >
                <Input placeholder="Phone Number" style={{ height: "50px" }} />
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
                <Input placeholder="E-mail Address *" style={{ height: "50px" }} />
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
                  <p className="ant-upload-text" style={{ fontSize: '16px' }}>
                    {file ? file : 'Resume Upload (Required)'}
                  </p>
                  <p className="ant-upload-hint">Drag & Drop or Browse</p>
                </Upload.Dragger>
              </Form.Item>


              <div className='select-form-modal'>
                <h5>If You don’t have resume</h5>
                <button onClick={handdleClick}>Click Here </button>
              </div>


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
            <Checkbox style={{ fontFamily: 'Nunito sans' }}>I agree with the privacy conditions.</Checkbox>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-button" id='submit-button'>
              Send Application
            </Button>
          </Form.Item>
        </Form>
      </div>


      <Modal
        //  title="Personal Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // This removes the "OK" and "Cancel" buttons
      >
        <ReumeForm title={title}/>
      </Modal>
    </div>
  );
};

export default ApplicationForm;
