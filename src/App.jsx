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
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/vac" element={<Vacancis />}></Route>
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/candidate1" element={<CandidatePage1 />} />
        <Route path="/candidate-star" element={<StartMain />} />
        <Route path="/candidate-ExamCv" element={<ExampleCv />} />
        <Route path="/client-procesure" element={<Procesure />} />
        <Route path="/client-services" element={<Services />} />
        <Route path="/client-soucing" element={<Sourcing />} />
        <Route path="/about-working" element={<Working />} />
        <Route path="/about-privacy" element={<Privacy />} />
        <Route path="/about-direction" element={<Direction />} />
        <Route path="/about-contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
