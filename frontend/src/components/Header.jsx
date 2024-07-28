import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';


{/*
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';

import { resetCart } from '../slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
*/}

const Header = () => {
    return (
        <header>
        <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
          <Container>



          <Navbar.Brand as={Link} to='/'>
            <img src={logo} alt='ProShop' />
            ProShop
          </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />

            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>     
              
              <Nav.Link as={Link} to='/cart'>
                <FaShoppingCart /> Cart
                {/*
                {cartItems.length > 0 && (
                  <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </Badge>
                )}
                */}
              </Nav.Link>

              <Nav.Link as={Link} to='/login'>
                  <FaUser /> Sign In
              </Nav.Link>

              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </header>  
    );


};

export default Header;