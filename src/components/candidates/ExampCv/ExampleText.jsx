import React from "react";
import '../../../style/candidate/ExampleCv/ExampleText.css'
const ExampleText = () => {
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
            to invite you for an interview.<br/> Unfortunately, many candidates make
            common mistakes that hinder their chances of being shortlisted.
            These include including irrelevant information, listing details in a
            purely chronological order, or forgetting to add essential contact
            details. Spelling mistakes and excessive jargon can also make your
            CV difficult to read. <br/>To avoid these pitfalls, tailor your CV to
            each job application. Highlight the most relevant experience and
            education, and avoid unnecessary details. Make your CV easy to scan
            by using bullet points and ensure your online CV matches the one you
            submit.<br/>By following these guidelines, you'll create a compelling CV
            that increases your chances of securing an interview. Below is an
            example of a strong CV, but remember to personalize your own to
            reflect your unique experience and skills.<br/> A standout CV not only
            tells your story but sets you apart from the competition!
          </h4>
        </div>

        <div className="example-text-continer-content-lower">
              <h1>Curriculum Vitae</h1>

              <div>
                   <h2>Personal Information</h2>
                   <ul>
                     <li><h4><span className="span-text">Name:</span> [Lastname], [name]</h4></li>
                     <li><h4><span className="span-text"> Mailing address:</span> [Address] [ + Postal Code + City]</h4></li>
                     <li><h4> <span className="span-text">Phone number :</span>Phone number : +721--------</h4></li>
                     <li><h4><span className="span-text">E-mail:</span>email@gmail.com</h4></li>
                     <li><h4><span className="span-text">Date of birth:</span> [Month + number], 19--</h4></li>
                      <li><h4><span className="span-text">Place of birth:</span> [Place], Sint Maarten </h4></li>
                      <li><h4><span className="span-text">Nationality:</span> Caribbean</h4></li>
                      <li><h4><span className="span-text">Marital status:</span> Married/ Single</h4></li>
                      <li><h4><span className="span-text">Sex:</span> Male/ Female</h4></li>

                   </ul>
              </div>



              <div>
                   <h2>Education</h2>
                   <ul>
                     <li><h4><span className="span-text">Aug. 2004- today:</span> [University + place], [Program] + (totally english-languaged education). Major: [main subject].</h4></li>
                     <li><h4><span className="span-text"> Jan. 2003-June 2004:</span> Studying abroad? Add what classes you took. If good grades, also add scores.</h4></li>
                     <li><h4> <span className="span-text">1997- 2003:</span> [Name of pre-university college], [place]. If good grades, also add scores.</h4></li>

                   </ul>
              </div>



              <div>
                   <h2>Professional Experience</h2>
                   <ul>
                     <li><h4><span className="span-text">Oct. 2005 – today:</span>[Your function], [what company/student union etc] in [City].<br/>[Brief explanation over your responsibilities]. (number of hours a week).</h4></li>
                     <li><h4><span className="span-text">  Nov. 2003 - Sept. 2005:</span> Consultant, recruitment in ABC Organisation, Role: Executive search. Etc.</h4></li>
                    

                   </ul>
              </div>



              <div>
                   <h2>Business Courses / Workshops / Additional education</h2>
                   <ul>
                     <li><h4><span className="span-text">July 2001 (4 days) </span>[Company name, if business-course + Business-course],<br/>[number of participants selected in the Sint Maarten + if international total selected].</h4></li>
                     <li><h4><span className="span-text"> Febr. 2003 (5 days)</span>  Orco Bank, course banking.<br/>[year] [Company name], name/topic of training/workshop.</h4></li>
                    

                   </ul>
              </div>



              <div>
                   <h2>Internships</h2>
                   <ul>
                     <li><h4><span className="span-text">Oct. 2004 – April 2005 </span>ABC Company, Sint Maarten, Responsible for Recruitment etc.
                     </h4></li>
                    
                   </ul>
              </div>


              <div>
                   <h2>Reports & Documents Written</h2>
                   <ul>
                     <><h4>If you have ever written a thesis, did a market research and wrote a report on this etc. Add a brief description of the work and if available an ISBN number.
                     </h4></>
                    
                   </ul>
              </div>

          
              <div>
                   <h2>Languages</h2>
                   <ul>
                     <li><h4>Dutch native</h4></li>
                     <li><h4>English fluent</h4></li>
                     <li><h4>German good</h4></li>
                     <li><h4>French average</h4></li>
                     
                    
                   </ul>
              </div>


              <div>
                   <h2>Other Activities</h2>
                   <h4><span className="span-text">2000-today  </span>[[what did you do],[what company, shop, student union etc], [place]. Briefly elaborate if needed. (number of hours a week).
                   </h4>
              </div>

              <div>
                   <h2>Computer Skills</h2>
                   <h4>Good knowledge of MS Word, MS Excel, MS PowerPoint, MS FrontPage, SPSS and the Internet. Small experience with Novell.
                   </h4>
              </div>


              <div>
                   <h2>Hobbies</h2>
                   <h4>Travelling, hockey, golf (in the possession of GVB), skiing, tennis, windsurfing, rowing, horse riding, investing (stocks), fitness, playing the guitar, playing chess, diving (Advanced), etc. Max, two lines!
                   </h4>
              </div>

        </div>
      </div>
    </div>
  );
};

export default ExampleText;
