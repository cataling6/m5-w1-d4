import { Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Navbar } from "react-bootstrap";
import MyLogo from "../MyLogo/MyLogo";
import logo from "../MyLogo/logo.svg"
const MyFooter = () => {
    return <div>

        <Navbar bg="dark" data-bs-theme="dark" className="d-flex align-self-end">
            <Container>
                <MyLogo Logo={logo} />
                <Nav className="me-auto">

                </Nav>
            </Container>
        </Navbar>

    </div>
}
export default MyFooter;