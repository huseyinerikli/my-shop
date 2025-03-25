import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About My Shop</h5>
            <p>Your one-stop destination for all your shopping needs. We offer quality products at competitive prices.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/products" className="text-light">Products</Link></li>
              <li><Link to="/categories" className="text-light">Categories</Link></li>
              <li><Link to="/about" className="text-light">About Us</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to="/faq" className="text-light">FAQ</Link></li>
              <li><Link to="/shipping" className="text-light">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-light">Returns</Link></li>
              <li><Link to="/privacy" className="text-light">Privacy Policy</Link></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} My Shop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 