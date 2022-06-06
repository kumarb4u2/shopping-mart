import './Header.scss';
import { Container, Navbar } from 'react-bootstrap';

export const Header = () => {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src="/logo.png"
              width="250"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <button className="cart-icon-container btn btn-link">
            <strong className="text-white cart-value">2</strong>
            <img
              alt="cart icon"
              src="/cart.png"
              className="d-inline-block align-top"
            />
          </button>
        </Container>
      </Navbar>
    </>
  );
};
