import React from "react";
import '../../../style/candidate/ExampleCv/ExampleText.css'
const ExampleText = () =>
{
  return (
    <div className="example-text-continer">
      <div className="example-text-continer-content">
        <div className="example-text-continer-content-upper">
          <h1>Example CV</h1>
          <h4>
            A well-crafted CV is crucial when applying for a new job—it’s your
            introduction and the first impression you make on potential
            employers. But why exactly do you create a CV? The purpose is
            simple: to provide a clear overview of your work experience,
            education, and skills. This enables employers to quickly determine
            if your profile aligns with the job requirements and decide whether
            to invite you for an interview.<br /><br /> Unfortunately, many candidates make
            common mistakes that hinder their chances of being shortlisted.
            These include including irrelevant information, listing details in a
            purely chronological order, or forgetting to add essential contact
            details. Spelling mistakes and excessive jargon can also make your
            CV difficult to read. <br /><br />To avoid these pitfalls, tailor your CV to
            each job application. Highlight the most relevant experience and
            education, and avoid unnecessary details. Make your CV easy to scan
            by using bullet points and ensure your online CV matches the one you
            submit.<br /><br />By following these guidelines, you'll create a compelling CV
            that increases your chances of securing an interview. Below is an
            example of a strong CV, but remember to personalize your own to
            reflect your unique experience and skills.<br /> A standout CV not only
            tells your story but sets you apart from the competition!
          </h4>
        </div>
        <br />
        <div className="example-text-continer-content-lower">
          <p className="cv">Curriculum Vitae</p>
          <div>
            <h2>Personal Information</h2>
            <ul>
              <li><h4 className="span-above-fields"><span className="span-text">Name:</span> <p className="span-value"> [Full Name] </p></h4></li>
              <li><h4 className="span-above-fields"><span className="span-text"> Mailing address:</span> <p className="span-value"> [Address] [ + Postal Code + City] </p></h4></li>
              <li><h4 className="span-above-fields"> <span className="span-text">Phone number: </span> <p className="span-value">+721-------- </p></h4></li>
              <li><h4 className="span-above-fields"><span className="span-text">E-mail:</span> <p className="span-value"> email@gmail.com </p></h4></li>
              <li><h4 className="span-above-fields"><span className="span-text">Date of birth:</span> <p className="span-value"> [Month + number], 19-- </p></h4></li>
              <li><h4 className="span-above-fields"><span className="span-text">Place of birth:</span> <p className="span-value"> [Place], Sint Maarten  </p></h4></li>
              <li><h4 className="span-above-fields"><span className="span-text">Nationality:</span> <p className="span-value"> Caribbean </p></h4></li>
              <li><h4 className="span-above-fields"><span className="span-text">Marital status:</span> <p className="span-value"> Married/ Single </p></h4></li>
              <li><h4 className="span-above-fields"><span className="span-text">Sex:</span> <p className="span-value"> Male/ Female </p></h4></li>

            </ul>
          </div>



          <div>
            <h2>Education</h2>
            <ul>
              <li><h4><span className="span-text">Aug. 2004- today:</span> <span className="span-value"> [University + place], [Program] + (totally english-languaged education). Major: [main subject].</span></h4></li>
              <li><h4><span className="span-text"> Jan. 2003-June 2004:</span> <span className="span-value"> Studying abroad? Add what classes you took. If good grades, also add scores.</span></h4></li>
              <li><h4> <span className="span-text">1997- 2003:</span> <span className="span-value">  [Name of pre-university college], [place]. If good grades, also add scores.</span></h4></li>

            </ul>
          </div>



          <div>
            <h2>Professional Experience</h2>
            <ul>
              <li><h4><span className="span-text">Oct. 2005 – today:</span><span className="span-value"> [Your function], [what company/student union etc] in [City].<br />[Brief explanation over your responsibilities]. (number of hours a week). </span></h4></li>
              <li><h4><span className="span-text">  Nov. 2003 - Sept. 2005:</span><span className="span-value">  Consultant, recruitment in ABC Organisation, Role: Executive search. Etc. </span></h4></li>
            </ul>
          </div>



          <div>
            <h2>Business Courses / Workshops / Additional education</h2>
            <ul>
              <li><h4><span className="span-text">July 2001 (4 days) </span><span className="span-value"> [Company name, if business-course + Business-course],<br />[number of participants selected in the Sint Maarten + if international total selected]. </span></h4></li>
              <li><h4><span className="span-text"> Febr. 2003 (5 days)</span> <span className="span-value">  Orco Bank, course banking.<br />[year] [Company name], name/topic of training/workshop. </span></h4></li>


            </ul>
          </div>



          <div>
            <h2>Internships</h2>
            <h4><span className="span-text">Oct. 2004 – April 2005 </span><span className="span-value"> ABC Company, Sint Maarten, Responsible for Recruitment etc. </span>
            </h4>
          </div>


          <div>
            <h2>Reports & Documents Written</h2>

            <span className="span-value">  If you have ever written a thesis, did a market research and wrote a report on this etc. Add a brief description of the work and if available an ISBN number.
            </span>

          </div>


          <div>
            <h2>Languages</h2>
            <ul>
              <li><h4 className="span-value">Dutch Native</h4></li>
              <li><h4 className="span-value">English Fluent</h4></li>
              <li><h4 className="span-value">German Good</h4></li>
              <li><h4 className="span-value">French Average</h4></li>


            </ul>
          </div>


          <div>
            <h2>Other Activities</h2>
            <h4><span className="span-text">2000-today  </span>  <span className="span-value">
              [what did you do],[what company, shop, student union etc], [place].
              Briefly elaborate if needed. (number of hours a week). </span>
            </h4>
          </div>

          <div>
            <h2>Computer Skills</h2>
            <span className="span-value">Good knowledge of MS Word, MS Excel, MS PowerPoint, MS FrontPage, SPSS and the Internet. Small experience with Novell.
            </span>
          </div>


          <div>
            <h2>Hobbies</h2>
            <h4 className="span-value">Travelling, hockey, golf (in the possession of GVB), skiing, tennis, windsurfing, rowing, horse riding, investing (stocks), fitness, playing the guitar, playing chess, diving (Advanced), etc. Max, two lines!
            </h4>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExampleText;
