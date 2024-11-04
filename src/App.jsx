import React from "react";
import { Routes, Route } from "react-router-dom";
import Vacancis from "./components/Vacancis";
import Home from "./components/home/Home";
import Details from "./components/Details/Details";
import Candidate from "./components/candidates/Candidate";
import CandidatePage1 from "./components/candidates/page2/CandidatePage1";
import StartMain from "./components/candidates/star/StartMain";
import ExampleCv from "./components/candidates/ExampCv/ExampleCv";
import Procesure from "./components/clients/procesure/Procesure";
import Services from "./components/clients/services/Services";
import Sourcing from "./components/clients/sourcing/Sourcing";
import Working from "./components/aboutUs/working/Working";
import Privacy from "./components/aboutUs/privacy/Privacy";
import Direction from "./components/aboutUs/direction/Direction";
import ContactUs from "./components/aboutUs/contactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import Notice from "./components/notice/Notice";
const App = () =>
{
  return (
    <div>
      <ScrollToTop />
      <Routes>

        <Route path="/vacancies" element={<Vacancis />}></Route>
        <Route path="/job-details" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="/job-application-process" element={<Candidate />} />
        <Route path="/job-application-tips" element={<CandidatePage1 />} />
        <Route path="/star-method" element={<StartMain />} />
        <Route path="/example-cv" element={<ExampleCv />} />
        <Route path="/procedure" element={<Procesure />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/sourcing-talent" element={<Sourcing />} />
        <Route path="/working-at-boss-recruitement" element={<Working />} />
        <Route path="/privacy-statement" element={<Privacy />} />
        <Route path="/direction" element={<Direction />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </div>
  );
};

export default App;
