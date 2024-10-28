import React, { useState } from 'react';
// import './App.css';
import '../../style/details/DetailsFrom.css'

function DetailsForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("apple")
    // Handle form submission logic here
  };

  return (

    <div className='form-contaner-main'>
    <div className="form-container">
      <h2>Interested? Send us your application!</h2>
      <form onSubmit={handleSubmit} className="form-content">


      <div className='form-input-style'>

      <div>
        <div className="input-group">
          <input type="text" placeholder="First name *" required />
          <input type="text" placeholder="Last name *" required />
        </div>
        <div  className='input-form-field'>
        <input type="tel" placeholder="Phone number" required />
        </div>
         
         <div  className='input-form-field'>
         <input type="email" placeholder="E-mail address *" required />
         </div>
        
        </div>
        
        
        <div className="file-upload">
          <label htmlFor="resume" style={{width:"90%"}}>
            <div className="upload-area">

                
                   {file ? file.name : <>
                    <span>Resume Upload (required)</span>
                    <span>Drag & Drop or Browse</span>
                   </>} 
                
              
            </div>
            <input type="file" id="resume" onChange={handleFileChange} required />
          </label>
        </div>
      </div>

        
        <div className="checkbox-group">
          <input type="checkbox" required />
          <label>I agree with the privacy conditions.</label>
        </div>
        
        <button type="submit" className='from-buttom'>Send Application</button>
      </form>
    </div>
    </div>
  );
}

export default DetailsForm;