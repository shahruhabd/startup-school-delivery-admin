import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DriversPage from "./pages/DriversPage/DriversPage";
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
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/register/admin" element={<AdminRegistration />} />
            <Route path="/register/driver" element={<DriverRegistration />} />
            <Route path="/register/parent" element={<ParentRegistration />} />
            <Route path="/register/parent" element={<ParentRegistration />} />
            <Route path="/child" element={<Child />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </>
  );
}

export default App;
