import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AdminRegistration from "./pages/AdminRegistrationPage/AdminRegistration";
import DriverRegistration from "./pages/DriverRegistrationPage/DriverRegistration";
import ParentRegistration from "./pages/ParentRegistrationPage/ParentRegistration";
import Child from "./pages/ChildPage/Child";
import Header from "./widgets/Header";
import Footer from "./widgets/Footer";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Container className="my-5">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register/admin" element={<AdminRegistration />} />
            <Route path="/drivers" element={<DriverRegistration />} />
            <Route path="/parents" element={<ParentRegistration />} />
            <Route path="/students" element={<Child />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </>
  );
}

export default App;
