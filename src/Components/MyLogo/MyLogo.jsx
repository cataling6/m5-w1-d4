import { Navbar } from "react-bootstrap"
import Logo from "./logo.svg"
const MyLogo = () => {
    return <div>
        {
            <Navbar.Brand href="#home">
                <img
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        }
    </div>
}
export default MyLogo