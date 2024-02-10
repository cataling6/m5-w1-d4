import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../MyLogo/logo.svg"
import MyLogo from '../MyLogo/MyLogo';

function MyNav(props) {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <MyLogo Logo={Logo} />
                    <Nav className="me-auto">
                        <Nav.Link href="#home">{props.link1}</Nav.Link>
                        <Nav.Link href="#features">{props.link2}</Nav.Link>
                        <Nav.Link href="#pricing">{props.link3}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default MyNav;