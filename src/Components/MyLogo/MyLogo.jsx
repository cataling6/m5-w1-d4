import { Navbar } from "react-bootstrap"
const MyLogo = (props) => {
    return <div>
        {
            <Navbar.Brand href="#home">
                <img
                    src={props.Logo}
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