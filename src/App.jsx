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
      </Routes>
    </div>
  );
};

export default App;
