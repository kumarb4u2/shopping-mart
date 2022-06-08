import './Header.scss';
import { Container, Navbar } from 'react-bootstrap';
import { Cart } from '../Cart/Cart';

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
          <Cart />
        </Container>
      </Navbar>
    </>
  );
};
