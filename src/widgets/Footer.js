import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="light">
      <Container>
        <span className="text-muted">Админ Панель</span>
      </Container>
    </Navbar>
  );
};

export default Footer;
