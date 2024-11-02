import React from 'react';
// import './AddressMap.css'; // import the CSS file for styling
import '../../../style/AboutUs/direction/AddressMap.css'

const AddressMap = () => {
  return (
    <div className="addres-container" style={{marginTop:"80px"}}>
      <div className="address-box">
        <h1>Address</h1>
        <h3>Boss Recruitment</h3>
        <h4><span style={{fontWeight:"bold"}}>Phone Number:</span> +1 (721) 542-1242</h4>
        <h4>Bush Road 26, unit 2-3,<br/>
           Ms Lailes Commercial Center,<br/>
           Philipsburg, Sint Maarten
        </h4>
      </div>
      <div className="map-box">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6201.070054569773!2d-63.055026!3d18.028122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e6b5a5d9b25ab%3A0xded1ae73d1c8db32!2sPhilipsburg%2C%20Sint%20Maarten!5e0!3m2!1sen!2s!4v1633154845273!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AddressMap;
