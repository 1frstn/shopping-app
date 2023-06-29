import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function NavBarPanel() {

  const state = useSelector((store) => store.cartReducer);
  console.log(state);
  return (
    <>
     
        <Navbar  bg='light' expand='lg'>
          <Container fluid>
            <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
            <Nav 
                   className="me-auto my-2 my-lg-0"
                   style={{maxHeight:'100px'}}
                   navbarScroll
                   >
                  <Nav.Link> <Link to='/' style={{color:'#000',textDecoration:'none'}}>Products </Link> </Nav.Link>
                </Nav>
          
                <Nav.Link> <Link to='/cart' style={{color:'#000',textDecoration:'none'}}>My Bag {state.cart.length} </Link> </Nav.Link>
           
          </Container>
        </Navbar>
     
    </>
  )
}
