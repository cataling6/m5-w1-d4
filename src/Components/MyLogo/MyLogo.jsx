import { Navbar } from "react-bootstrap"
import "./MyLogo.css"
const MyLogo = (props) => {
    return <>
        {
            <Navbar.Brand href="#home">
                <img
                    src={props.Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top custom-logo"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        }
    </>
}
export default MyLogo